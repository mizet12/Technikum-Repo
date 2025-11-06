using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class player : MonoBehaviour
{
    public Rigidbody2D rb;
    public Animator anim;
    public SpriteRenderer sprite;
    public Transform camera;
    public bool isDooropen = false;
    public GameObject enteringus;

    private float dirX;

    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
        anim = GetComponent<Animator>();
        sprite = GetComponent<SpriteRenderer>();
        enteringus.SetActive(false);
    }

    // Update is called once per frame
    private void Update()
    {
        if (dialog_manager.GetInstance().dialogIsPlaying)
        {
            return;
        }
        dirX = Input.GetAxisRaw("Horizontal");
        rb.velocity = new Vector2(dirX * 5, rb.velocity.y);

        UpdateAnimationUpdate();


    }
    private void UpdateAnimationUpdate()
    {
        if (dirX > 0)
        {
            anim.SetBool("running", true);
            sprite.flipX = false;
        }
        else if (dirX < 0)
        {
            anim.SetBool("running", true);
            sprite.flipX = true;
        }
        else
        {
            anim.SetBool("running", false);
        }

        if (Input.GetButtonDown("Jump"))
        {
            rb.velocity = new Vector2(rb.velocity.x, 5);
        }

    }
    IEnumerator Wait() { yield return new WaitForSeconds(2); }
    public void enter104()
    {
        if (isDooropen == true)
        {
            //anim.SetBool("entering", true);
            //Wait();
            rb.transform.position = new Vector2(2.22044f, 22.1855f);
            camera.transform.position = new Vector2(-0.42f, 24.19f);
            //Wait();
            //anim.SetBool("entering", false);
             
        }
        else
        {
            return;
        }
    }
    public void exit104()
    {
        //anim.SetBool("entering", true);
        Wait();
        rb.transform.position = new Vector2(8.71f, -1.8f);
        camera.transform.position = new Vector2(2.03f, -0.06f);
        Wait();
        //anim.SetBool("entering", false);

    }

    public void mainHalltoCrossRoad()
    {
        rb.transform.position = new Vector2(44.09f, -2.54f);
        camera.transform.position = new Vector2(44.09f, -2.54f);
    }
    public void CrossRoadtoMainHall()
    {
        rb.transform.position = new Vector2(9.16f, -1.92f);
        camera.transform.position = new Vector2(9.16f, -1.92f);
    }
    public void halltoundergound()
    {
        rb.transform.position = new Vector2(28.98f, -21.52f);
        camera.transform.position = new Vector2(28.98f, -21.52f);
    }
    public void undergroundtohall()
    {
        rb.transform.position = new Vector2(4.57f, -1.84f);
        camera.transform.position = new Vector2(4.57f, -1.84f);
    }
    public void dooropen()
    {
        isDooropen = true;
        enteringus.SetActive(true);
    }

    public void CrossRoadtoFrontOfCafeteria()
    {
        rb.transform.position = new Vector2(95.4f, -1.56f);
        camera.transform.position = new Vector2(95.4f, -1.56f);
    }

    public void FrontOfCafeteriaToCrossRoad()
    {
        rb.transform.position = new Vector2(57.08f, -2.03f);
        camera.transform.position = new Vector2(57.08f, -2.03f);
    }
}
