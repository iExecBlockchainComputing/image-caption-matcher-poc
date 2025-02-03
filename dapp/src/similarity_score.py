import os
import numpy as np
from utils import loadModelAndProcessor, loadImage, forward
import tensorflow as tf



def getScore(outputs): 
    """
        Get the similarity score of the image and the provided description, by converting the output to a softmax score (between 0 and 1)
        
        Args: 
            outputs: the similarity score of the image and the provided description
        
        Returns:
            score: the similarity score of the image and the provided description (1-100)
    """
    softmax = np.exp(outputs.itm_score) / np.sum(np.exp(outputs.itm_score))
    score = int(softmax[0][1] * 100)
    print("Similarity Score: ", score)
    return score

def SimilarityScore(image_path, provided_description, cache_dir): 
    model, processor = loadModelAndProcessor(cache_dir)

    raw_image = loadImage(image_path)
    
    inputs = processor(images=raw_image, text=provided_description, return_tensors="tf")
    
    outputs = forward(model, inputs)
    
    return getScore(outputs)

    



