using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class siewniak_dialog_trigger : MonoBehaviour
{
    [Header("Visual Cue")]
    [SerializeField] private GameObject VisualCue;

    [Header("Ink JSON")]
    [SerializeField] private TextAsset inkJSON;
    [SerializeField] private TextAsset inkJSONpo;

    public Animator anim;
    private bool playerInRange;

    public bool obiadek;

    private void Awake()
    {
        playerInRange = false;
        VisualCue.SetActive(false);
    }

    private void Update()
    {
        if (playerInRange && !dialog_manager.GetInstance().dialogIsPlaying)
        {
            VisualCue.SetActive(true);
            if (InputManager.GetInstance().GetInteractPressed())
            {
                anim.SetBool("gadanie", true);
                if(obiadek == false)
                {
                    dialog_manager.GetInstance().EnterDialogMode(inkJSON);
                }
                else
                {
                    dialog_manager.GetInstance().EnterDialogMode(inkJSONpo);
                }

            }
        }
        else
        {
            VisualCue.SetActive(false);
        }
    }

    private void OnTriggerEnter2D(Collider2D collider)
    {
        if (collider.gameObject.tag == "Player")
        {
            playerInRange = true;
        }
    }

    private void OnTriggerExit2D(Collider2D collider)
    {
        if (collider.gameObject.tag == "Player")
        {
            playerInRange = false;
        }
    }

    public void obiad()
    {
        obiadek = true;
    }
}
