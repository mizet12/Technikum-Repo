using System.ComponentModel;

namespace Lista.Models;

public class Product : INotifyPropertyChanged
{
	string _name;
	string _unit;
	double _quantity;
	int _ispurchased;
	public string Name
	{
		get => _name;
		set 
		{
			_name = value;
			OnPropertyChanged("Name");
		}
	}
	public string Unit
	{
		get => _unit;
		set
		{
			_unit = value;
			OnPropertyChanged("Unit");
		} 
	}
	public double Quantity 
	{
		get => _quantity;
		set
		{
			_quantity = value;
			OnPropertyChanged("Quantity");
		}
	}
	public int IsPurchased 
	{
		get => _ispurchased; 
		set
		{
			_ispurchased = value;
			OnPropertyChanged("IsPurchased");
		}
	}

	public event PropertyChangedEventHandler PropertyChanged;

	void OnPropertyChanged(string name) => PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(name));
}