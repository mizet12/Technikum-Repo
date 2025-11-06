using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Kontrolki
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }
        private void RadioButton_Checked(object sender, RoutedEventArgs e)
        {
            RadioButton radioButton = sender as RadioButton;
            if (radioButton != null && radioButton.IsChecked == true)
            {
                FilmWrapPanel.Children.Clear();

                switch (radioButton.Content.ToString())
                {
                    case "Akcja":
                        AddFilms(new string[] { "Die Hard", "Terminator", "John Wick", "The Dark Knight" });
                        break;
                    case "Komedia":
                        AddFilms(new string[] { "Superbad", "The Hangover", "Dumb and Dumber", "Anchorman" });
                        break;
                    case "Dramat":
                        AddFilms(new string[] { "The Shawshank Redemption", "Forrest Gump", "Schindler's List", "The Godfather" });
                        break;
                    case "Sci-Fi":
                        AddFilms(new string[] { "Blade Runner", "The Matrix", "Star Wars", "Inception" });
                        break;
                    default:
                        break;
                }
            }
        }

        private void AddFilms(string[] films)
        {
            foreach (string film in films)
            {
                FilmWrapPanel.Children.Add(new Expander()
                {
                    Header = film,
                    Content = $"Opis filmu: {film}"
                });
            }
        }
    }
}
