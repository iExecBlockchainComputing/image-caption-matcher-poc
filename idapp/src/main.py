import json 
import os
from os.path import join
from similarity_score import SimilarityScore
import sys 

os.environ['HDF5_USE_FILE_LOCKING'] = 'false'
input_directory = os.environ["IEXEC_IN"]
output_directory = os.environ["IEXEC_OUT"]

def writeOutput(score): 
    """
        Write the outputs to the iexec output directory
        
        Args: 
            score: the similarity score
    """
    with open(output_directory + '/result.txt', 'w+') as fout:
        fout.write(score)
    with open(output_directory + '/computed.json', 'w+') as f:
        json.dump({ "deterministic-output-path" : output_directory + '/result.txt' }, f)
    return
        
if __name__ == '__main__':  
    image_path = ""  
    dirs = ""

    arg = ''
    for i in range(1, len(sys.argv)): 
        arg += sys.argv[i] + " "
    
    for _, image in enumerate(os.listdir(input_directory)):
            if image.startswith("0x"):
                image_path = join(input_directory, image)
                break

    if image_path == "": 
        writeOutput("No image found in the input directory" + str(dirs))
    
    else: 
        description = str(arg)
        outputs = SimilarityScore(image_path, description, output_directory)
        writeOutput(str(outputs))