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

def deserialize_zip(zip_path, target_path, schema="binary"):
    """
    Extract and deserialize data from a ZIP file stored as a binary file.

    Args:
        zip_path (str): Path to the binary file containing the ZIP archive.
        target_path (str): Path inside the ZIP where the data is stored.
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

        if target_path not in zip_ref.namelist():
            raise FileNotFoundError(f"Path '{target_path}' not found in ZIP")

        with zip_ref.open(target_path) as file:
            data = file.read()

            # Deserialize based on schema
            if schema == "string":
                return data.decode('utf-8')
            elif schema == "bool":
                return bool(int.from_bytes(data, byteorder="big"))
            elif schema == "number":
                return float(data.decode('utf-8'))
            elif schema == "binary":
                return data
            else:
                raise ValueError(f"Unsupported schema: {schema}")

def get_protected_image(zip_path, image_path="image"):
    """
    Extracts an image from a protected ZIP file.

    Args:
        zip_path (str): Path to the ZIP file.
        image_path (str): Path inside the ZIP where the image is stored.

    Returns:
        PIL Image: The extracted image.
    """
    image_data = deserialize_zip(zip_path, image_path, "binary")

    try:
        return Image.open(io.BytesIO(image_data)).convert('RGB')
    except Exception as e:
        raise ValueError(f"Failed to load extracted image: {e}")
