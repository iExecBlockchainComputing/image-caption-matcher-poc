from transformers import BlipProcessor, TFBlipForImageTextRetrieval
import tensorflow as tf
from PIL import Image


def loadImage(image_path): 
    return Image.open(image_path).convert('RGB')

def loadModelAndProcessor(cache_dir): 
    """ 
        Load the model and processor from the pretrained BLIP model
        This model is specifically used for image-text retrieval tasks, so this model is used to get the similarity score
    """    
    processor = BlipProcessor.from_pretrained("Salesforce/blip-itm-base-coco", local_files_only=False)
    model = TFBlipForImageTextRetrieval.from_pretrained("Salesforce/blip-itm-base-coco", local_files_only=False)
    return model, processor

@tf.function 
def forward(model, inputs): return model(**inputs)