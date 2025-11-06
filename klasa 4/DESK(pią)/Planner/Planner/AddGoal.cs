using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Planner
{
    public partial class AddGoal : Form
    {
        private Panel mainPanel;
        private TableLayoutPanel inputPanel;
        private TableLayoutPanel buttonPanel;
        private TextBox descriptionTextBox;
        private DateTimePicker dueDateTimePicker;
        private NumericUpDown priorityNumericUpDown;
        private Button okButton;
        private Button cancelButton;

        private List<Task> tasks;

        public event EventHandler<TaskEventArgs> TaskAdded;
        public event EventHandler<TaskEventArgs> TaskEdited;

        private Task editedTask;

        public AddGoal(List<Task> tasks)
        {
            this.tasks = tasks;
            InitializeTaskForm();
            InitializeComponent();
        }

        public AddGoal(List<Task> tasks, Task taskToEdit) : this(tasks)
        {
            editedTask = taskToEdit;
            descriptionTextBox.Text = editedTask.Description;
            dueDateTimePicker.Value = editedTask.DueDate;
            priorityNumericUpDown.Value = editedTask.Priority;
        }

        private void InitializeTaskForm()
        {
            mainPanel = new Panel();
            inputPanel = new TableLayoutPanel();
            buttonPanel = new TableLayoutPanel();
            descriptionTextBox = new TextBox();
            dueDateTimePicker = new DateTimePicker();
            priorityNumericUpDown = new NumericUpDown();
            okButton = new Button();
            cancelButton = new Button();

            mainPanel.Dock = DockStyle.Fill;

            inputPanel.Dock = DockStyle.Top;
            inputPanel.AutoSize = true;
            inputPanel.AutoSizeMode = AutoSizeMode.GrowAndShrink;

            okButton.Text = "OK";
            cancelButton.Text = "Cancel";

            inputPanel.Controls.Add(descriptionTextBox, 0, 0);
            inputPanel.Controls.Add(dueDateTimePicker, 0, 1);
            inputPanel.Controls.Add(priorityNumericUpDown, 0, 2);
            inputPanel.Controls.Add(okButton, 0, 3);
            inputPanel.Controls.Add(cancelButton, 1, 3);

            mainPanel.Controls.Add(inputPanel);
            Controls.Add(mainPanel);

            okButton.Click += okButton_Click;
            cancelButton.Click += cancelButton_Click;

            CenterControlHorizontally(inputPanel);
            AdjustControlWidth(dueDateTimePicker, okButton, cancelButton);
            SetEqualWidth(inputPanel, descriptionTextBox, dueDateTimePicker, priorityNumericUpDown);

            buttonPanel.Controls.Add(okButton);
            buttonPanel.Controls.Add(cancelButton);
            inputPanel.Controls.Add(buttonPanel, 0, 3);
        }
        private void SetEqualWidth(TableLayoutPanel panel, params Control[] controls)
        {
            int maxWidth = controls.Max(c => c.Width);
            foreach (var control in controls)
            {
                control.Width = maxWidth;
            }
        }

        private void CenterControlHorizontally(Control control)
        {
            control.Anchor = AnchorStyles.None;
            int x = (mainPanel.Width - control.Width) / 2;
            control.Location = new System.Drawing.Point(x, control.Location.Y);
        }

        private void AdjustControlWidth(Control control, params Control[] referenceControls)
        {
            int totalWidth = 0;
            foreach (var referenceControl in referenceControls)
            {
                totalWidth += referenceControl.Width + referenceControl.Margin.Horizontal;
            }

            control.Width = totalWidth;
        }


        private void okButton_Click(object sender, EventArgs e)
        {
            if (editedTask != null)
            {
                editedTask.Description = descriptionTextBox.Text;
                editedTask.DueDate = dueDateTimePicker.Value;
                editedTask.Priority = (int)priorityNumericUpDown.Value;

                TaskEdited?.Invoke(this, new TaskEventArgs
                {
                    Description = editedTask.Description,
                    DueDate = editedTask.DueDate,
                    Priority = editedTask.Priority
                });
            }
            else
            {
                TaskAdded?.Invoke(this, new TaskEventArgs
                {
                    Description = descriptionTextBox.Text,
                    DueDate = dueDateTimePicker.Value,
                    Priority = (int)priorityNumericUpDown.Value
                });
            }

            DialogResult = DialogResult.OK;
            Close();
        }


        private void cancelButton_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.Cancel;
            Close();
        }

        private void AddGoal_Load(object sender, EventArgs e)
        {

        }
    }
    public class TaskEventArgs : EventArgs
    {
        public string Description { get; set; }
        public DateTime DueDate { get; set; }
        public int Priority { get; set; }
    }
}
