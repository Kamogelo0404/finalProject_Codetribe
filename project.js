window.onload= function(){
    
    //let price= "$29";

    //document.getElementById("head").innerHTML=price;

    const content = () => {
        let con= document.querySelector('.container');

        con.innerHTML= `<div class="top">
                            <div class="top1">
                                <h1 class="head1">Join our community</h1>
                                <div>
                                    <h1>30-day, hassle-free money back guarantee</h1>
                                    <p class="p1">Gain access to our full library of tutorials along with expert code reviews.<br><br>
                                    Perfect for any developers who are serious about honing their skills.<br>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="bottom">
            
                            <div class="first">
                                <h1 class="head2">Monthly Subscription</h1>
                                <div class="bottom1">
                                    <h1 id="head">$29</h1>
                                    <p class="p2">per month</p>
                                </div>
                                    <p class="p3">Full access for less than $1 a day</p>
                                    <button type="submit" class="signupbtn">Sign Up</button>
                                </div>
           
                        <div class="second">
                        <h1 class="head2"> Why Us</h1>
                        <p class="p4">Tutorials by industry experts <br>
                            Peer & expert code review <br>
                            Coding exercises <br>
                            Access to our Github repos <br>
                            community forum <br>
                            Flashcard decks <br>
                            New videos every week</p>
                        </div>
          
                    </div>
                    `;
    }
    content();

    


    

}
