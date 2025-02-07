import numpy as np
from utils import loadModelAndProcessor, loadImage, forward
import tensorflow as tf
from PIL import Image

def getScore(outputs):
    """
    Get the similarity score of the image and the provided description.

    Args:
        outputs: Model outputs containing similarity scores.

    Returns:
        int: The similarity score (1-100).
    """
    raw_score = outputs.itm_score[0][1]
    sigmoid_score = 1 / (1 + np.exp(-raw_score))
    score = int(sigmoid_score * 100)

    print("Similarity Score:", score)
    return score

def SimilarityScore(image_input, provided_description, cache_dir):
    """
    Computes the similarity score between an image and a provided description.

    Args:
        image_input (str | PIL.Image): The image path or a PIL Image object.
        provided_description (str): The textual description.
        cache_dir (str): Path to cache directory for model loading.

    Returns:
        int: The similarity score.
    """
    model, processor = loadModelAndProcessor(cache_dir)

    if isinstance(image_input, str):
        raw_image = loadImage(image_input)
    elif isinstance(image_input, Image.Image):
        raw_image = image_input
    else:
        raise ValueError("Invalid image input type. Expected file path or PIL Image.")

    inputs = processor(images=raw_image, text=provided_description, return_tensors="tf")
    outputs = forward(model, inputs)

    return getScore(outputs)
