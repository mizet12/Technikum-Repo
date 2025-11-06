#include <iostream>
#include <vector>
#include <string>

void drawLargeLetter(const std::vector<std::string>& pattern, char letter, std::vector<std::string>& output) {
    for (size_t i = 0; i < pattern.size(); ++i) {
        for (char c : pattern[i]) {
            if (c == '#') {
                output[i] += letter;
            }
            else {
                output[i] += ' ';
            }
        }
        output[i] += ' ';
    }
}

int main() {
  
    std::vector<std::vector<std::string>> letters = {
        
        {
            "#    #",
            "#   # ",
            "#  #  ",
            "###   ",
            "#  #  ",
            "#   # ",
            "#    #"
        },
        
        {
            "#     #",
            "#     #",
            "#     #",
            "#     #",
            "#  #  #",
            "#  #  #",
            " #   # "
        },
     
        {
            "  ###  ",
            "   #   ",
            "   #   ",
            "   #   ",
            "   #   ",
            "   #   ",
            "  ###  "
        },
       
        {
            "   #   ",
            "  # #  ",
            " #   # ",
            " ##### ",
            " #   # ",
            " #   # ",
            " #   # "
        },
      
        {
            " ##### ",
            "   #   ",
            "   #   ",
            "   #   ",
            "   #   ",
            "   #   ",
            "   #   "
        },
 
        {
            " ##### ",
            " #     ",
            " #     ",
            " ##### ",
            " #     ",
            " #     ",
            " ##### "
        },
  
        {
            "#    #",
            "#   # ",
            "#  #  ",
            "###   ",
            "#  #  ",
            "#   # ",
            "#    #"
        }
    };

    std::string word = "KWIATEK";
    std::vector<std::string> output(7, "");

    for (size_t i = 0; i < word.size(); ++i) {
        drawLargeLetter(letters[i], word[i], output);
    }

    for (const auto& line : output) {
        std::cout << line << std::endl;
    }

    return 0;
}
