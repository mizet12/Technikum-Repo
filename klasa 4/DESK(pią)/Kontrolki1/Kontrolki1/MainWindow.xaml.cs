using System.Collections.ObjectModel;
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

namespace Kontrolki1
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public ObservableCollection<PlanItem> PlanItems { get; set; }

        public MainWindow()
        {
            InitializeComponent();
            PlanItems = new ObservableCollection<PlanItem>();
            DataContext = this;
        }

        private void DodajPlanButton_Click(object sender, RoutedEventArgs e)
        {
            DodajPlanWindow dodajPlanWindow = new DodajPlanWindow();
            if (dodajPlanWindow.ShowDialog() == true)
            {
                PlanItems.Add(new PlanItem
                {
                    Text = dodajPlanWindow.Text,
                    Date = dodajPlanWindow.Date
                });
            }
        }

        private void EdytujButton_Click(object sender, RoutedEventArgs e)
        {
            PlanItem selectedItem = (sender as FrameworkElement).DataContext as PlanItem;
            DodajPlanWindow dodajPlanWindow = new DodajPlanWindow(selectedItem);
            if (dodajPlanWindow.ShowDialog() == true)
            {
                selectedItem.Text = dodajPlanWindow.Text;
                selectedItem.Date = dodajPlanWindow.Date;
            }
        }

        private void UsunButton_Click(object sender, RoutedEventArgs e)
        {
            PlanItem selectedItem = (sender as FrameworkElement).DataContext as PlanItem;
            PlanItems.Remove(selectedItem);
        }
    }

    public class PlanItem
    {
        public string Text { get; set; }
        public DateTime Date { get; set; }
    }


}
