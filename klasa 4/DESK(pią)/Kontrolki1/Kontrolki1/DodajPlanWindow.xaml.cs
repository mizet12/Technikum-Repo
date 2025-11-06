using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace Kontrolki1
{

    public partial class DodajPlanWindow : Window
    {
        public string Text { get; set; }
        public DateTime Date { get; set; }

        public DodajPlanWindow()
        {
            InitializeComponent();
            DataContext = this;
        }

        public DodajPlanWindow(PlanItem itemToEdit) : this()
        {
            if(Text != null)
            {
                Text = itemToEdit.Text;
            }
            if (Date != null)
            {
                Date = itemToEdit.Date;
            }
            }

        private void ZatwierdzButton_Click(object sender, RoutedEventArgs e)
        {
            DialogResult = true;
        }
    }
}
