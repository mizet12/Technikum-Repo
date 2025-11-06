using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraFollow : MonoBehaviour
{
    public float FollowSpeed = 2;
    public float yOffset = 1;
    public Transform target;
    public Transform Camera;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        //if(Camera.position.x < 4.3 && Camera.position.x > -0.4)
        //{
            Vector3 newPos = new Vector3(target.position.x + yOffset, target.position.y + yOffset, -10);
            transform.position = Vector3.Slerp(transform.position, newPos, FollowSpeed * Time.deltaTime);
       // }else 
        if(Camera.position.x > 4.3)
        {
            Vector3 newPose = new Vector3(4.2f, target.position.y + yOffset, -10);
        }else if(Camera.position.x < -0.4)
        {
            Vector3 newPoser = new Vector3(-0.3f, target.position.y + yOffset, -10);

        }


    }
}
