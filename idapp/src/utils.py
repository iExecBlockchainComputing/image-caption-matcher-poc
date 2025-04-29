import io
import zipfile
import os
import json
from transformers import BlipProcessor, TFBlipForImageTextRetrieval
import tensorflow as tf
from PIL import Image

def loadImage(image_path): 
    """ Load an image from a given path and convert it to RGB format. """
    return Image.open(image_path).convert('RGB')

def loadModelAndProcessor(cache_dir): 
    """ 
    Load the model and processor from the pretrained BLIP model.
    This model is specifically used for image-text retrieval tasks.
    """    
    processor = BlipProcessor.from_pretrained("Salesforce/blip-itm-base-coco", local_files_only=False)
    model = TFBlipForImageTextRetrieval.from_pretrained("Salesforce/blip-itm-base-coco", local_files_only=False)
    return model, processor

@tf.function 
def forward(model, inputs): 
    """ Perform forward pass with the BLIP model. """
    return model(**inputs)

def deserialize_zip(zip_path, schema="binary"):
    """
    Extract and deserialize data from a ZIP file stored as a binary file.

    Args:
        zip_path (str): Path to the binary file containing the ZIP archive.
        schema (str): The type of data to extract (e.g., "string", "binary").

    Returns:
        The deserialized value based on the schema.
    """
    if not os.path.exists(zip_path):
        raise FileNotFoundError(f"ZIP binary file not found: {zip_path}")

    # Read the binary file as ZIP content
    with open(zip_path, "rb") as bin_file:
        zip_data = bin_file.read()

    # Load the ZIP from binary content
    with zipfile.ZipFile(io.BytesIO(zip_data), 'r') as zip_ref:
        print("Files inside ZIP:", zip_ref.namelist())  # Debugging output

        for file_name in zip_ref.namelist():
            if file_name.endswith('/'):
                continue

            try:
                with zip_ref.open(file_name) as file:
                    data = file.read()

                # Attempt to load the file as an image
                with Image.open(io.BytesIO(data)) as test_img:
                    test_img.verify()  # Validate the image

                print(f"Found image: {file_name}")
                return file_name, data

            except Exception as e:
                print(f"File {file_name} is not a valid image: {e}")
                continue

        raise FileNotFoundError("No valid image found in the ZIP file")

def get_protected_image(zip_path):
    """
    Extracts an image from a protected ZIP file, regardless of its name.

    Args:
        zip_path (str): Path to the ZIP file.

    Returns:
        PIL Image: The extracted image.
    """
    file_name, image_data = deserialize_zip(zip_path)

    try:
        return Image.open(io.BytesIO(image_data)).convert('RGB')
    except Exception as e:
        raise ValueError(f"Failed to load extracted image {file_name}: {e}")