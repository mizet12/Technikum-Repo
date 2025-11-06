using System;
using System.IO;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Documents;
using Microsoft.Win32;

namespace TextEditor
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void NewDocument_Click(object sender, RoutedEventArgs e)
        {
            TabItem tabItem = new TabItem();
            tabItem.Header = "Untitled";
            tabControl.Items.Add(tabItem);
            tabControl.SelectedItem = tabItem;
            RichTextBox richTextBox = new RichTextBox();
            tabItem.Content = richTextBox;
        }

        private void OpenDocument_Click(object sender, RoutedEventArgs e)
        {
            statusBar.Content = "Opened!";
            OpenFileDialog openFileDialog = new OpenFileDialog();
            if (openFileDialog.ShowDialog() == true)
            {
                string fileName = openFileDialog.FileName;
                string content = File.ReadAllText(fileName);
                TabItem tabItem = new TabItem();
                tabItem.Header = Path.GetFileName(fileName);
                tabControl.Items.Add(tabItem);
                tabControl.SelectedItem = tabItem;
                RichTextBox richTextBox = new RichTextBox();
                richTextBox.AppendText(content);
                tabItem.Content = richTextBox;
            }
        }

        private void SaveDocument_Click(object sender, RoutedEventArgs e)
        {
            statusBar.Content = "Saved!";
            TabItem selectedTab = tabControl.SelectedItem as TabItem;
            if (selectedTab != null)
            {
                RichTextBox richTextBox = selectedTab.Content as RichTextBox;
                if (richTextBox != null)
                {
                    SaveFileDialog saveFileDialog = new SaveFileDialog();
                    if (saveFileDialog.ShowDialog() == true)
                    {
                        string fileName = saveFileDialog.FileName;
                        File.WriteAllText(fileName, new TextRange(richTextBox.Document.ContentStart, richTextBox.Document.ContentEnd).Text);
                    }
                }
            }
        }

        private void Exit_Click(object sender, RoutedEventArgs e)
        {
            Application.Current.Shutdown();
        }

        private void TabControl_SelectionChanged(object sender, RoutedEventArgs e)
        {
            TabItem selectedTab = tabControl.SelectedItem as TabItem;
            if (selectedTab != null)
            {
                statusBar.Content = $"Editing document: {selectedTab.Header}";
            }
        }
    }
}
