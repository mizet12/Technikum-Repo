using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class dialog_trigger : MonoBehaviour
{
    [Header("Visual Cue")]
    [SerializeField] private GameObject VisualCue;

    [Header("Ink JSON")]
    [SerializeField] private TextAsset inkJSON;

    private bool playerInRange;

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
                dialog_manager.GetInstance().EnterDialogMode(inkJSON);
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
}
