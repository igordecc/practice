import time

class Timer:
    def __init__(self):
        self.t = 0

    def start(self):
        self.t = time.perf_counter()
        return self

    def stop(self):
        self.t = time.perf_counter()-self.t
        return self.t

def timer_test():
    castom_timer = Timer().start()
    time.sleep(5)
    castom_timer = castom_timer.stop()
    print(castom_timer)
    print("5 was expected")
""""
try:
    timer_test()
    print("timer_test is good!")
except:
    print("timertest is BAD!")
"""

class Application_Logging:
    def __init__(self, application_name):
        self.application_name = application_name
        # why is the remembered_time zero, when we init?
        # cause we didn't count anything yet!
        self.remembered_time = 0

    def start_logging(self):
        self.castom_timer = Timer()
        self.castom_timer.start()

    def stop_and_save_logging(self):
        self.finish_castom_timer_time = self.castom_timer.stop()
        self.finish_castom_timer_time += self.remembered_time
        #write to the file!!!!!!@

    def pause_logging(self):
        self.remembered_time += self.castom_timer.stop()

    def continue_logging(self):
        self.castom_timer.start()

class Application_File_Logging(Application_Logging):

    def __init__(self, application_name):
        super (Application_File_Logging, self).__init__(application_name)
    # use this command to write logs!
    def write_saved_log_in_a_file(self):
        filename = str(self.application_name)+ ".log"
        self.stop_and_save_logging()
        self.file_writer(filename, self.finish_castom_timer_time)

    # internal function. Don't use out of place.
    def file_writer(self, filename, returned_time):
        with open('recorded_logs//' + filename, "a") as myfile:
            time_when_app_was_ended = time.asctime(time.localtime(time.time())) #local computer lime
            myfile.write(time_when_app_was_ended + " " + str(returned_time) + "\n")


#to install keyboard.py do: "pip3 install keyboard" in your command line
#for more information visit: "https://github.com/boppreh/keyboard"
#TODO do Absent Tracker from it. - If human don't smash buttons some time - he is absent
import keyboard
#keyboard.hook()

from PyQt5 import Qt, QtCore, QtWidgets
import sys

class Application(Qt.QWidget):
    def __init__(self):
        self.up = Qt.QApplication(sys.argv)
        super(Application, self).__init__()
        self.App_dict = dict()
        self.initUI()

    def initUI(self):

        self.setWindowTitle("Action Tracker 1.0")
        # - Why we are writing code down here like this?
        # - Lets make buttons with the accurate size, with the same intervals
        # in the windows center!

        # we need list of buttons for counting the number of ones
        but_list = []

        btn_start = QtWidgets.QPushButton("start", self)
        #self.connect(btn_start.clicked, lambda *args: print("Hellow work"))
        but_list.append(btn_start)

        btn_stop = QtWidgets.QPushButton("stop", self)
        but_list.append(btn_stop)

        #first two - set initial space coordinations
        #second two - set initial width and hight
        print(sys.getwindowsversion())
        window_placement_hight = 300
        window_placement_indentation = 300
        window_height = 200
        window_width = 300
        self.setGeometry(window_placement_indentation, window_placement_hight, window_width, window_height)

        buttons_number = but_list.__len__()
        intervals_number = buttons_number + 1
        # example:
        # window's start ||interval [button] interval [button] interval ||window's end
        # 3 intervals, 2 buttons

        chosen_button_width = 100
        try:
            buttons_summary_width = buttons_number * chosen_button_width
            intervals_summary_width = window_width - buttons_summary_width
            intervals_width = intervals_summary_width / intervals_number
            if intervals_width < 0:
                raise ValueError
        except ValueError:
            print("Invalid ", str(chosen_button_width.__name__()),"  value!")

        indentation = 0
        indentation_y = 50 # skipped it for now
        for button in but_list:
            indentation += intervals_width
            button.resize(chosen_button_width, 40)  #button size
            button.move(indentation, indentation_y) #button coordinates
            indentation += chosen_button_width

        self.application_name = QtWidgets.QLineEdit(parent=self)

        self.application_name.move(50, 100)
        self.application_name.resize(200, 20)

        btn_start.clicked.connect(self.start_logging)
        btn_stop.clicked.connect(self.stop_logging)

        self.show()
        sys.exit(self.up.exec_())

    def start_logging(self):
        application_name = self.application_name.text()
        print(application_name)

        #Dictionary, for all time recording Applications.
        A = Application_File_Logging(application_name)
        A.start_logging()
        self.App_dict[application_name] = A

    def stop_logging(self):
        print(self.App_dict)
        application_name = self.application_name.text()
        try:
            self.App_dict[application_name].write_saved_log_in_a_file()
        except Exception as i:
            print(i)
            print("Wrong name!")


x = Application()

#.Qt is not working! use Python 3.6 shell for autocomplete!

    #TODO Add creating "recorded_logs" directory
    #TODO Add .log files to .gitigrnore
    #TODO write a bunch of code
    #UI - PyQt