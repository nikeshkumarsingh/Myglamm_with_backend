# Myglamm-with_Backend

Unit 4 Project At Masai School.

**Links for reference :**

Front-end Repo Link :
https://github.com/Vaibhav0702/Myglamm-with_Frontend.git

Back-end Repo Link :
https://github.com/nikeshkumarsingh/Myglamm_with_backend.git

Blog link : 
https://rahulbaghel6211.blogspot.com/2022/04/myglamm-backend.html




# Technology We Used:
# In Frontend:
1. HTML
2. CSS
3. JavaScript
4. Bootstrap


# In Backend:
1. Mongo DB
2. AWS
3. Node JS
4. Express JS


**About Website :**

**Landing page**

![Screenshot (51)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNJca0H2TrVgRNZQPIDUunv9JGMLp6CFVNYe_WxWQ6jqbwU0SCQR33yMd0egy1_L97r6XWrcdj06it5Dy7zlxwf-B-2Hp1ly0R6l0IbfxNBK9xhBFp_HBLstBAuVByCmTm6i4JbzpH53PB-ikNm4xWuTuwhQngrHIDkCYJQOXRGUMhWBTirmTsUA2s/s1280/WhatsApp%20Image%202022-04-02%20at%2013.37.02.jpeg)

**Signup page**

![Screenshot (55)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiySwBItoN_osGJwzNi5Z3r9sfhV4lgA8_Z5VtSMogC2aE1bMwn1F-tgInL5dE-Wi9_9S2MqYeERxI7mY1obcx9li6LphrVr0GZB7YKb3moi5SrxZcR65lVkGxDXAUogvcBzD4Re6IpgFue-K_i9uiI-oWT53lkFHKzCFnHKqCAtNBZmEdlYV2_3hA7/s1280/WhatsApp%20Image%202022-04-03%20at%2013.33.31.jpeg)

**Login page**

![Screenshot (55)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgE-1x6B0OsWGqiWdBv6lLurABJR6ofeazPIw4F4wyuRTd4tCNLKOquuQpMtd_wfApLMIaqHTm7glN1Iep4X99kvAQTcQvaki04RxoqZgxGbqMTbMrshucv9pp_qLtdzDYfB7zfvwFY4ZXUhLDa0i5LlLZZLIJlrHQFHrQocbCSaid-G1JS1Z3vJQqU/s1279/WhatsApp%20Image%202022-04-03%20at%2013.33.29%20(1).jpeg)

**Product page**

![Screenshot (55)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghOicVGE7EONc0VjOMBux6BD39oe6qO9ifC7DhS159RPtnx3PSUU6ly4LaAUccZv8vMEK6Ee2AeAIBC2ISI4vRaSfDgKpM2Ulmvc5t2nCmWhfW6Jv97_EzBVhVnu-qYLrCieqz_FPDSNVC8HXZCY18T9BR0LGKgkbCROf3fSn6t92Ge545DIJK26_8/s1280/WhatsApp%20Image%202022-04-03%20at%2013.33.30%20(1).jpeg)

**Cart page**

![Screenshot (55)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgD0zHnD09NwxNtdx9q-0dtCsVlC9JZvBPjB8KUFgL2sDt2S0QLVxj92cyw_rfZBp9MotbwytO_P4SNPHoSEMSmDhFcUUmgXP3Oggn7_5yf-lzZkLkPqAQs3gjEkxbYyPGBcp8dMMsvjqGgGxkoCLNtIuAS9xZcGILiwEw7Kkx_mzD6kpBSarWPCZT-/s1280/WhatsApp%20Image%202022-04-03%20at%2013.33.27.jpeg)

**CheckOut page**

![Screenshot (58)](https://blogger.googleusercontent.com/img/a/AVvXsEgUw4OXMOYXvQv1hj5J03rw8bA3YxzATuZW5jJG1_J5XMwaMtyY9zQdvPSp19RFXZxX4Jmkhv2Vw984QDOaMOPCz_gjmuuerY2-6RZVpuR3AzapNslb4riWbC2CzOKwYQKE0ceApBcDUPo0JXKdwal6t5ciCCiPrOBnAuIwsIJvH1e5Q5Pot_REgkV9=s320)

**Payment page**

![Screenshot (56)](https://blogger.googleusercontent.com/img/a/AVvXsEiS0s4hKld4oofBxONLSceprbyTCPbZmEB0vcWKz23QP3qOVkp7-nvokWgYuW7lfP9gMrgYYm6IjAzlIRbgkvmL94HBw6CzPtyL-NDYXeIcBplKsr4Yx_Wa5QSylk53JFCGzy622sxADjy3sX670WumLukcfieTfz8kRbUjr3HdxRq1XT16netp9Wit=s1280)




## Instructions to Run the Code Using AWS
#### Note:

We created cloud database using MongoDb Atlas and deployed on AWS. So, if you want to run our code then please read the instructions below :
- Clone our repository `https://github.com/Vaibhav0702/Myglamm-with_Frontend.git` for frontend code and `https://github.com/nikeshkumarsingh/Myglamm_with_backend.git` for backend code.
- Download Key from `https://drive.google.com/file/d/11abC1gV8ed2VZKXR6PH-YZY7_43Jr6UL/view?usp=sharing`.
- Go to download folder of you computer and open Git Bash here.
- copy paste the link `ssh -i "My-Glamm_Key.pem" ubuntu@ec2-3-88-12-166.compute-1.amazonaws.com` into your Git Bash terminal and press enter key.
- Type yes then press enter key ( if required ).
- Type `cd /var` then press enter key.
- Type `ls` then press enter key.
- Type `cd Myglamm_with_backend` then press enter key.
- Type `sudo npm run server` then press enter key.
- It will show a message that `listening on port 5000`.
- Open the `index.html` on Live server from `https://github.com/Vaibhav0702/Myglamm-with_Frontend.git`.
- Then you can Navigate through other pages from Landing page like `lipstick.html`, `makeup.html`,`haircare.html` etc.



## AWS API'S Instructions 

- you can change the API by modifying url put one from below after http://ec2-3-88-12-166.compute-1.amazonaws.com:5000/

1. products
2. makeups
3. lipsticks
4. sanitizingCare
5. haircare
6. skincares
7. users

EX :
http://ec2-3-88-12-166.compute-1.amazonaws.com:5000/lipsticks

## Instructions to Run the Code Using Netlify Link
- simply open the link https://nikeshandgroup.netlify.app/index.html
- Follow the Instruction from `https://medium.com/@nikdoc1947/how-to-fetch-data-from-http-protocol-link-fd3866fe4e9`.


