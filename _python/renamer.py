"""
rename all files to condition python names
"""
import os


class Renamer():
    def __init__(self, start_directory, ignore_files=[]):
        # silent initialisation
        self.start_directory = start_directory
        self.ignore_files = [".git", ".idea", ".gitignore"]
        for file in ignore_files:
            self.ignore_files.append(file)

    def status(self):
        print("start directory", self.start_directory)
        print("ignorefiles", self.ignore_files)

    def main_init(self):
        print("file renamer is running")
        self.start_directory = input("enter absolute start path: ")

    def print(self):
        for root, dirs, files in os.walk(self.start_directory):
            ckechlist = root.split("\\")
            if self.check_dir(ckechlist)=="continue":
                continue
            print(root, dirs, files)

    def check_dir(self, checklist):
        s = "ok"
        for file in self.ignore_files:
            if file in checklist:
                s = "continue"  # don't visit "ignore_files" in dirs
        return s

    def __call__(self, *args, **kwargs):
        for root, dirs, files in os.walk(self.start_directory):
            pass


if __name__ == '__main__':
    print("file renamer is running")
    # start_directory = input("enter absolute start path: ")
    start_directory = "D:\work\Practice"
    renamer = Renamer(start_directory)
    renamer.print()

    renamer.status()

# module - small_characters.py
# directory/package - small_characters
# class - CamelCase ///////////// will not realise
# more about naming:
# https://visualgit.readthedocs.io/en/latest/pages/naming_convention.html