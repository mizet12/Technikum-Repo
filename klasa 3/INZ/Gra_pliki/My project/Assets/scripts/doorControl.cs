using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class doorControl : MonoBehaviour
{
    public GameObject door;
    // Start is called before the first frame update
    void Start()
    {
        door.SetActive(false);
    }

    // Update is called once per frame
    void Update()
    {
        
    }
    public void openDoor()
    {
        door.SetActive(true);
    }
}
