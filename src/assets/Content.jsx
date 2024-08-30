import '../style.css';
import '../styling.css';
function Content(){
    const sponsors = ['SERB.png','DSS Imagetech.jpeg','Merck.png','SPT LabTech.jpg','Cytiva.jpg','Thermo Fisher.jpg','Molbiogen.png',
                      'Jaldhara.png','Genotypic.png','Tarsons.jpg','Zellebiotech.jpg','Biogeneix.jpg','NECC.png',
                      'Assam Chemicals & Instruments Corporation.png','Promega.png'];
    return(
        <>
            <div className="latest">
                <h1>Latest News</h1>
                <br></br>
                <p><img src="/fast-forward.png" width="20px" alt=""></img> Heads up! Meeting schedule's been updated <a href="/program">click</a></p>
                <p><img src="/fast-forward.png" width="20px" alt=""></img> Information on Hostel accommodation and other relevant details has been circulated to student participants.</p>
                <p><img src="/fast-forward.png" width="20px" alt=""></img> Abstract book is shared with the participants.</p>
            </div>
            {/* <!-- WELCOME DESCRIPTION  --> */}

            <div className="content">
                <h1>About</h1>
                <p>The biennial RNA group meeting brings together brilliant Indian researchers including senior and young scientists, PhD students and Postdoctoral fellows for an immersive and exciting deliberations on frontier areas in RNA Biology. The 12th edition of this meeting will be held on May 22-24 at IIT Guwahati. We welcome you to this exciting meeting!</p>
            </div>

            <div className="org-section">
                <h1>Organizers</h1>
                <div className="org-content">
                    <div className="org">
                        <img src="/B Anand.jpg" alt=""></img>
                        <li><a target="_blank" href="https://www.iitg.ac.in/biotech/faculty_profile.php?fname=B&lname=Anand&iitg=1103&mail=banand@iitg.ac.in">B Anand</a></li>
                        <h3>+91-0361-2582223</h3>
                    </div>
                    <div className="org">
                        <img src="/Kusum Kumari Singh.jpg" alt=""></img>
                        <li><a target="_blank" href="https://www.iitg.ac.in/biotech/faculty_profile.php?fname=Kusum%20K&lname=Singh&iitg=1137&mail=kusumsingh@iitg.ac.in">Kusum K Singh</a></li>
                        <h3>+91-361-2583206</h3>
                    </div>
                </div>
                <h3>Email:<a href="mailto:rnameet.iitg@gmail.com">  rnameet.iitg@gmail.com</a></h3>
            </div>

            <div className="sponsor">
                <h1>Sponsors</h1>
                <div className="sponsor-inner">
                    {sponsors.map((sponser,idx)=>(
                        <img src={`/sponsors/${sponser}`} key={idx} alt='sponser'></img>
                    ))}
                </div>
            </div>

            {/* <!-- IIT GUWAHATI DESCRIPTION --> */}
            <div className="venue">
                <div className="venue-description">
                    <h1>Venue : IIT Guwahati</h1>
                    <p>IIT Guwahati campus is on a sprawling 700 acres plot of land on the north bank of the river Brahmaputra around 20 kms from the heart of the city. With the majestic Brahmaputra on one side, and with hills and vast open spaces on others, the campus provides an ideal setting for learning.</p>
                </div>
                <div className="video">
                    <iframe src="https://www.youtube.com/embed/92C1QU4jr30?si=cSAxA4REgbWlUTot" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
            
            <div className="map">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.3475780230765!2d91.68945977404545!3d26.185369290971682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5ac3338a9621%3A0x66b70a4f97bb3c16!2sDepartment%20of%20Bioscience%20%26%20Bioengineering%20-%20IIT%20Guwahati!5e0!3m2!1sen!2sin!4v1708002173488!5m2!1sen!2sin" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"/>
            </div>
        </>
    )
}
export default Content;