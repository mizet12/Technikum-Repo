using System.Collections.ObjectModel;
using System.Text.Json;
using Lista.Models;


public static class FileHelper
{
    private static readonly string FilePath = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), "products.json");

    public static ObservableCollection<Product> LoadProducts()
    {
        if (File.Exists(FilePath))
        {
            using (StreamReader reader = new StreamReader(FilePath))
            {
                string json = reader.ReadToEnd();
                return JsonSerializer.Deserialize<ObservableCollection<Product>>(json);
            }
        }

        return new ObservableCollection<Product>();
    }

    public static void SaveProducts(ObservableCollection<Product> products)
    {
        string json = JsonSerializer.Serialize(products);
        File.WriteAllText(FilePath, json);
    }
}
