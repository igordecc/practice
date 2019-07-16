import requests
import os
from lxml.etree import ElementTree, HTMLParser
import io


def download_to(path, url_to_download_from):
    # download chosen file from the url to the path
    # folder in format "./folder1/folder2/final_folder/"
    # url in format: "https://doc.lagout.org/science/0_Computer%20Science/2_Algorithms/Genetic%20Programming.pdf"
    file_name, file_format = get_file_name_and_format(url_to_download_from)
    response_object = requests.get(url_to_download_from)

    if path[-1] != "/":
        path.append("/")

    if not os.path.exists(path):
            os.makedirs(path)

    with open(path + file_name + "." + file_format, "wb") as file:
        file.write(response_object.content)
    file.close()
    return print("download: ", file_name + "." + file_format)


def get_file_name_and_format(file_url):
    file_name_and_format = file_url.split("/")[-1]
    splitted_by_dot = file_name_and_format.split(".")
    file_name, file_format = "".join(splitted_by_dot[:-1]), splitted_by_dot[-1]
    return file_name, file_format


def download_all_to(path, url):
    # download all files from the url and save to the path
    response_object = requests.get(url)
    url_file_list = lxml_get_files(response_object)

    if path[-1] != "/":
        path.append("/")

    if not os.path.exists(path):
            os.makedirs(path)

    if not url.endswith("/"):
        url.append("/")

    for file in url_file_list:
        download_to(path, url + file)

def lxml_get_files(page_response):
    tree = ElementTree(file=io.BytesIO(page_response.content), parser=HTMLParser()).getroot()
    all_a_elements = tree.cssselect('pre a')
    dir_and_files_list = [i.get("href") for i in all_a_elements]

    file_list = [i for i in dir_and_files_list if not i.endswith("/")]
    return file_list


if __name__ == '__main__':
    dir = "./foo/"
    url = "https://doc.lagout.org/science/0_Computer%20Science/2_Algorithms/Genetic%20Programming.pdf"
    # download_to(dir, url)
    folder_url = "https://doc.lagout.org/science/0_Computer%20Science/2_Algorithms/"
    download_all_to(dir, folder_url)