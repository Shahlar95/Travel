import React from 'react';

function Home() {
  return (
    <div className='home'>
      <section
        className='where'>
        <div className="container-fluid"  style={{
          backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/fccf/d5fa/bb1cf41c431c855d2e813fd554b5e09f?Expires=1702252800&Signature=c5hlKD3m34hQnzoX3sAb0e8p48E94alIZtSgQRzyi8F1Fn4y8ObQcg6k8DfI0SOeRelkz4Q9GSr7Onvcafwas6G44FcFIEcsrHa7zMf06Kw1OWe5tHa3m5CIixekOAI7iQBgwJdUwhqSLLRZl83H4P6QHg4L48tIsqhbUGV943XsiRp3IfRyU44eRpmdQf1eDybZyZvlx~vQEDbFCC8a~Pj2ZvrorQ4jfV3QYEwS-u4fctzeHvp~ESA0WBm5Ex~~JZBpjFTr3LMv6HFLuYz1n3suspOmBSyQlpTJvYFWL4F6ffzrgISAgUGqVHvCd-slkJbh4ywBpOhphXIwKFA25Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")',
        }}>

        
          <div className='where-content'>
                <div className='svg'>
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="84" height="18" viewBox="0 0 84 18" fill="none">
  <path d="M3 16.6711L8.96668 4.73778C9.7367 3.19773 11.9344 3.19773 12.7045 4.73778L16.8022 12.9334C17.5723 14.4734 19.77 14.4734 20.54 12.9334L24.6378 4.73778C25.4078 3.19773 27.6056 3.19773 28.3756 4.73778L32.4734 12.9334C33.2434 14.4734 35.4411 14.4734 36.2112 12.9334L40.3089 4.73778C41.079 3.19773 43.2767 3.19773 44.0467 4.73778L48.1445 12.9334C48.9145 14.4734 51.1123 14.4734 51.8823 12.9334L55.9801 4.73778C56.7501 3.19773 58.9478 3.19773 59.7179 4.73778L63.8156 12.9334C64.5857 14.4734 66.7834 14.4734 67.5534 12.9334L71.6512 4.73778C72.4212 3.19773 74.619 3.19773 75.389 4.73778L81.3557 16.6711" stroke="#DF6951" stroke-width="5.22371"/>
</svg>
                  </span>
                </div>
                <div className='where-text'>
                  <p>
                  No matter where you’re going to, we’ll take you there
                  </p>
                </div>
                <div className='where-choose'>
                    <div className='where-adress'>
                      <input type="search" placeholder='Where to?' />
                    </div>
                    <div className='where-type'>
                      <select name="Travel type" id="Travel type">
                        <option value="Travel type">Travel type</option>
                      </select>
                    </div>
                    <div className='where-duration'>
                    <select name="duration" id="duration">
                        <option value="duration">Duration</option>
                      </select>
                    </div>
                    <div className='where-submit'>
                        <button>
                          Submit
                        </button>
                    </div>
                </div>
                <div className='comments'>
            <div className='svg'> 
            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
  <circle cx="18.7876" cy="18.2505" r="16.9538" fill="#DF6951" stroke="white" stroke-width="2.08948"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
  <circle cx="18.7876" cy="18.2505" r="16.9538" fill="#DF6951" stroke="white" stroke-width="2.08948"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
  <circle cx="18.7876" cy="18.2505" r="16.9538" fill="#DF6951" stroke="white" stroke-width="2.08948"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
  <circle cx="18.7876" cy="18.2505" r="16.9538" fill="#DF6951" stroke="white" stroke-width="2.08948"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
  <circle cx="18.7876" cy="18.2505" r="16.9538" fill="#DF6951" stroke="white" stroke-width="2.08948"/>
</svg>        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
  <circle cx="18.7876" cy="18.2505" r="16.9538" fill="#DF6951" stroke="white" stroke-width="2.08948"/>
</svg>
            </div>
            <div className='comment-content'>
              2,500 people booked Tommorowland Event in last 24 hours
            </div>
          </div>
          </div>
          
        </div>
      </section>
      
    </div>
  );
}

export default Home;
