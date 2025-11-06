namespace Planner
{
    public partial class Form1 : Form
    {
        private TableLayoutPanel mainPanel;
        private ListBox tasksListBox;
        private List<Task> tasks;

        private string tasksFilePath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "tasks.json");

        public Form1()
        {
            InitializeComponent();
            InitializeMenuStrip();

            tasks = new List<Task>();

            mainPanel = new TableLayoutPanel();
            mainPanel.Dock = DockStyle.Fill;
            Controls.Add(mainPanel);

            tasksListBox = new ListBox();
            tasksListBox.Dock = DockStyle.Fill;
            tasksListBox.Anchor = AnchorStyles.None;
            tasksListBox.BorderStyle = BorderStyle.FixedSingle;
            mainPanel.Controls.Add(tasksListBox);
            tasksListBox.Width = (int)(mainPanel.Width * 0.4);
            CenterControl(mainPanel, tasksListBox);
        }

        private void InitializeMenuStrip()
        {
            tasksListBox = new ListBox();

            MenuStrip menuStrip = new MenuStrip();
            Controls.Add(menuStrip);

            ToolStripMenuItem fileMenu = new ToolStripMenuItem("File");
            menuStrip.Items.Add(fileMenu);

            ToolStripMenuItem newTaskMenuItem = new ToolStripMenuItem("New Task");
            newTaskMenuItem.Click += (sender, e) => { MessageBox.Show("Create a new task"); };
            fileMenu.DropDownItems.Add(newTaskMenuItem);

            ToolStripMenuItem exitMenuItem = new ToolStripMenuItem("Exit");
            exitMenuItem.Click += (sender, e) => { exitMenuItem_Click(); };
            fileMenu.DropDownItems.Add(exitMenuItem);

            ToolStripMenuItem aboutTaskMenuItem = new ToolStripMenuItem("About App");
            aboutTaskMenuItem.Click += (sender, e) => { ShowAboutDialog(); };
            fileMenu.DropDownItems.Add(aboutTaskMenuItem);

            ToolStripMenuItem tasksMenu = new ToolStripMenuItem("Tasks");
            menuStrip.Items.Add(tasksMenu);

            ToolStripMenuItem addTaskMenuItem = new ToolStripMenuItem("Add Task");
            addTaskMenuItem.Click += (sender, e) => { OpenTaskForm(); };
            tasksMenu.DropDownItems.Add(addTaskMenuItem);

            ToolStripMenuItem editTaskMenuItem = new ToolStripMenuItem("Edit Task");
            editTaskMenuItem.Click += (sender, e) => { EditSelectedTask(); };
            tasksMenu.DropDownItems.Add(editTaskMenuItem);

            ToolStripMenuItem deleteTaskMenuItem = new ToolStripMenuItem("Delete Task");
            deleteTaskMenuItem.Click += (sender, e) => { DeleteSelectedTask(); };
            tasksMenu.DropDownItems.Add(deleteTaskMenuItem);


        }

        private void DeleteSelectedTask()
        {
            if (tasksListBox.SelectedIndex != -1)
            {
                int selectedIndex = tasksListBox.SelectedIndex;

                tasks.RemoveAt(selectedIndex);
                //SaveTasksToFile();
                UpdateTasksListBox();
            }
            else
            {
                MessageBox.Show("Wybierz zadanie do usuniecia");
            }
        }

        private void EditSelectedTask()
        {
            if (tasksListBox.SelectedIndex != -1)
            {
                int selectedIndex = tasksListBox.SelectedIndex;
                Task selectedTask = tasks[selectedIndex];
                AddGoal taskForm = new AddGoal(tasks, selectedTask);

                taskForm.TaskEdited += (sender, args) =>
                {
                    TaskEventArgs x = (TaskEventArgs)args;
                    selectedTask.name = x.name;
                    selectedTask.Description = x.Description;
                    selectedTask.DueDate = x.DueDate;
                    selectedTask.Priority = x.Priority;

                    //SaveTasksToFile();
                    UpdateTasksListBox();
                };
                taskForm.ShowDialog();
            }
            else
            {
                MessageBox.Show("Wybierz zadanie do edycji");
            }
        }

        private void OpenTaskForm()
        {
            AddGoal taskForm = new AddGoal(tasks);

            taskForm.TaskAdded += (sender, args) =>
            {
                TaskEventArgs x = (TaskEventArgs)args;
                tasks.Add(new Task
                {
                    name = x.name,
                    Description = x.Description,
                    DueDate = x.DueDate,
                    Priority = x.Priority
                });
                //SaveTasksToFile();
                UpdateTasksListBox();
            };

            taskForm.ShowDialog();
        }



        private void ShowAboutDialog()
        {
            MessageBox.Show("Strip Menu Michał Wiliński 4F");
        }



        private void UpdateTasksListBox()
        {
            tasksListBox.Items.Clear();
            foreach (Task task in tasks)
            {
                tasksListBox.Items.Add($"{task.name}, Do: {task.DueDate},Info:{task.Description} ,Priorytet: {task.Priority}");
            }

            tasksListBox.Refresh();
        }
        private void CenterControl(Control parent, Control child)
        {
            child.Location = new System.Drawing.Point(
                (parent.Width - child.Width) / 2,
                (parent.Height - child.Height) / 2
            );
        }
        private void exitMenuItem_Click()
        {

            Application.Exit();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
           
        }
    }
    public class Task
    {
        public string name {  get; set; }
        public string Description { get; set; }
        public DateTime DueDate { get; set; }
        public int Priority { get; set; }
    }
}
