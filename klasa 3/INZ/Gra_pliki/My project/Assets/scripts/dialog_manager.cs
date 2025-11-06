using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using Ink.Runtime;
using UnityEngine.EventSystems;

public class dialog_manager : MonoBehaviour
{
    [Header("Dialog UI")]
    [SerializeField] private GameObject dialogPanel;
    [SerializeField] private TextMeshProUGUI dialogText;

    [Header("Choices UI")]
    [SerializeField] private GameObject[] choices;
    private TextMeshProUGUI[] choicesText;

    private static dialog_manager instance;

    private Story currentStory;

    public bool dialogIsPlaying { get; private set; }

    private void Awake()
    {
        if(instance != null)
        {
            Debug.Log("Za duzo dialog manager");
        }
        instance = this;
    }
    public static dialog_manager GetInstance()
    {
        return instance;
    }

    private void Start()
    {
        dialogIsPlaying = false;
        dialogPanel.SetActive(false);

        choicesText = new TextMeshProUGUI[choices.Length];
        int index = 0;
        foreach(GameObject choice in choices)
        {
            choicesText[index] = choice.GetComponentInChildren<TextMeshProUGUI>();
            index++;
        }
    }
    private void Update()
    {
        if (!dialogIsPlaying)
        {
            return;
        }

        if (Input.GetButtonDown("Submit"))
        {
            ContinueStory();
        }
    }

    public void EnterDialogMode(TextAsset inkJSON)
    {
        currentStory = new Story(inkJSON.text);   
        dialogIsPlaying = true;
        dialogPanel.SetActive(true);

        ContinueStory();

    }
    private IEnumerator ExitDialogMode()
    {
        yield return new WaitForSeconds(0.2f);

        dialogIsPlaying = false;
        dialogPanel.SetActive(false );
        dialogText.text = "";
    }
    private void ContinueStory()
    {
        if (currentStory.canContinue)
        {
            dialogText.text = currentStory.Continue();
            DisplayChoices();
        }
        else
        {
            StartCoroutine(ExitDialogMode());
        }
    }

    private void DisplayChoices()
    {
        List<Choice> currentChoices = currentStory.currentChoices;
        if(currentChoices.Count > choices.Length)
        {
            Debug.LogError("Wiecej wyborow niz UI wspiera");
        }
        int index = 0;
        foreach(Choice choice in currentChoices)
        {
            choices[index].gameObject.SetActive(true);
            choicesText[index].text = choice.text;
            index++;
        }

        for(int i = index; i< choices.Length; i++)
        {
            choices[i].gameObject.SetActive(false);
        }

        StartCoroutine(SelectfirstChoice());
    }

    private IEnumerator SelectfirstChoice()
    {
        EventSystem.current.SetSelectedGameObject(null);
        yield return new WaitForEndOfFrame();
        EventSystem.current.SetSelectedGameObject(choices[0].gameObject);
    }

    public void MakeChoice(int choiceIndex)
    {
        currentStory.ChooseChoiceIndex(choiceIndex);
    }
}
