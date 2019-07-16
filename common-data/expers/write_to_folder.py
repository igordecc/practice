
def create_file_without_directory():
    with open("file", "wb") as file:
        file.write(b"12345656467")
    file.close()

# with open("new_directory/file", "wb") as file:
#     file.write(b"12345656467")
# file.close()


def stack_example():
    # https://stackoverflow.com/questions/12517451/automatically-creating-directories-with-file-output
    import os
    import errno

    filename = "./foo/bar/baz.txt"
    if not os.path.exists(os.path.dirname(filename)):
        try:
            os.makedirs(os.path.dirname(filename))
        except OSError as exc:  # Guard against race condition
            if exc.errno != errno.EEXIST:
                raise

    with open(filename, "w") as f:
        f.write("FOOBAR")

    f.close()

def found_directory_where_program_is_booted():
    import os
    curdir = os.curdir
    print(curdir)
    return curdir

def create_directory_in_existing_one():
    pass

if __name__ == '__main__':
    stack_example()