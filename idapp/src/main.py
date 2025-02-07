import os
import sys
import json
from os.path import join
from similarity_score import SimilarityScore
from utils import get_protected_image

os.environ['HDF5_USE_FILE_LOCKING'] = 'false'
input_directory = os.environ["IEXEC_IN"]
output_directory = os.environ["IEXEC_OUT"]

def writeOutput(score): 
    """
    Write the outputs to the iExec output directory.
    
    Args: 
        score (str): The similarity score.
    """
    with open(output_directory + '/result.txt', 'w+') as fout:
        fout.write(str(score))
    with open(output_directory + '/computed.json', 'w+') as f:
        json.dump({ "deterministic-output-path": output_directory + '/result.txt' }, f)

if __name__ == '__main__':
    zip_path = ""
    for _, file_name in enumerate(os.listdir(input_directory)):
        if file_name.startswith("0x"): 
            zip_path = join(input_directory, file_name)
            break

    if zip_path == "": 
        writeOutput("No ZIP file found in the input directory")
        sys.exit(1)

    image_path_in_zip = "image"
    description = " ".join(sys.argv[1:])

    try:
        image = get_protected_image(zip_path, image_path_in_zip)
    except Exception as e:
        writeOutput(f"Failed to extract image: {str(e)}")
        sys.exit(1)

    try:
        outputs = SimilarityScore(image, description, output_directory)
        writeOutput(str(outputs))
    except Exception as e:
        writeOutput(f"Failed to compute similarity score: {str(e)}")
