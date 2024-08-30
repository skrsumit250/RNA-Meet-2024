import '../style.css';
import '../styling.css';
function Program(){
    return(
        <>
            <div className="head">
                <h1>Schedule</h1>
                <hr></hr>
            </div>

            <div className="timeline">
                {/* <!-- DAY1 --> */}
                <div className="container left">
                    <div className="box">
                        <span className="left-arrow"></span>
                        <h1>Day 1: Wednesday, 22 MAY 2024</h1>

                        <p><b id="time">12:00 - 13:55 : </b> Registration</p>
                        <p><b id="time">12:30 - 13:45 : </b> Lunch</p>
                        <p><b id="time">14:00 - 14:05 : </b> Welcome Note</p>
                        <p><b id="time">14:05 - 14:15 : </b> Introduction to RNA Group Meeting </p>
                        <p><b id="time">14:15 - 14:20 : </b> Inauguration of RNA India website</p>
                        <br></br>
                        {/* <!-- Session I  --> */}
                        <h3>SESSION I: Regulatory RNAs </h3>
                        <h4> Chair: Rakesh S. Laishram and Purusharth Rajyaguru</h4>
                        <br></br>
                        <p><b id="time">14:20 - 14:45 : </b> IT-1 <b id="time">Meetali Singh</b> (small RNA-mediated epigenetic regulation of pathogenesis and host-parasite interaction)</p>
                        <br></br>
                        <p><b id="time">14:45 - 15:10 : </b> IT-2 <b id="time">Bhupendra Verma</b> (tRNA-derived non-coding RNAome during Dengue Virus Pathogenesis)</p>
                        <br></br>
                        <p><b id="time">15:10 - 15:35 : </b> IT-3 <b id="time">Veena S Patil</b> (Human CD4+T cell memory subsets in infectious diseases: lessons from multiomics analysis)</p>
                        <br></br>
                        <p><b id="time">15:35 - 16:00 : </b> IT-4 <b id="time">Dimple Notani</b> (RNA modulates phase-separation of enhancers for robust signaling response)</p>
                        <br></br>
                        <p><b id="time">16:00 - 16:25 : </b> IT-5 <b id="time">Zhumur Ghosh</b> (Regulatory Noncoding RNomics Orchestrating the journey across pre- and post-fertilization stages)</p>
                        <br></br>

                        <p><b id="time">16:00 - 16:25 : </b>Coffee/Tea Break</p>
                        <br></br>

                        {/* <!-- Session II  --> */}
                        <h3>SESSION II: Flash Talks - I </h3>
                        <h4> Chair: Rakesh S. Laishram and Purusharth Rajyaguru</h4>
                        <br></br>
                        <p><b id="time">16:55 - 17:02 : </b> FT-1 <b id="time">Pratyasha Bhowal </b>(Unravelling the secrets of a key enzyme in a trypanosomal parasite: Insights into structural and functional attributes)</p>
                        <br></br>
                        <p><b id="time">17:02 - 17:09 : </b> FT-2 <b id="time">Nivedita Dutta </b>(Modulation of structure and thermodynamics of RNA G-quadruplexes by A to I editing: Possible route to G quadruplex-based RNA therapeutics)</p>
                        <br></br>
                        <p><b id="time">17:09 - 17:16 : </b> FT-3 <b id="time"> Safirul Islam </b>(Determining novel cytoplasmic mRNA capping enzyme-targeted, hypoxia-responsive RNAs in hypoxic osteosarcoma cellular model)</p>
                        <br></br>
                        <p><b id="time">17:16 - 17:23 : </b> FT-4 <b id="time"> Dipanjana Banerjee </b>(Early life stress-induced RNA methylation regulates spatial memory)</p>
                        <br></br>
                        <p><b id="time">17:23 - 17:30 : </b> FT-5 <b id="time"> Prerna Narwal </b>(Translation inhibition primes cells to face stress via activation of acute inflammation)</p>
                        <br></br>
                        
                        <p><b id="time">17:30 - 19:30 : </b>Poster presentations</p>
                        <p><b id="time">19:30 - 21:30 : </b>Business Meeting and Dinner </p>
                        <br></br>
                    </div>
                </div>
                {/* <!-- DAY2 --> */}
                <div className="container right">
                    <div className="box">
                        <span className="right-arrow"></span>
                        <h1>Day 2: Thursday, 23 MAY 2024</h1>

                        {/* <!-- Session III  --> */}
                        <h3>SESSION III: Ribonucleoprotein Complexes </h3>
                        <h4> Chair: Sudip Kundu and Srikanta Goswami</h4>
                        <br></br>
                        <p><b id="time">09:00 - 09:30 : </b> IT-6 <b id="time">Saumitra Das</b> (RNA binding proteins and RNA viruses: A journey together)</p>
                        <br></br>
                        <p><b id="time">09:30 - 09:55 : </b> IT-7 <b id="time">Ranjit P. Bahadur</b> (Predicting protein-RNA recognition sites using sequence and structural features)</p>
                        <br></br>
                        <p><b id="time">09:55 - 10:20 : </b> IT-8 <b id="time"> Jeetender Chugh</b> (Differential conformational dynamics in two type-A RNA-binding domains drive the double stranded RNA recognition and binding)</p>
                        <br></br>
                        <p><b id="time">10:20 - 10:45 : </b> IT-9 <b id="time">Pradeepkumar P.I.</b> (Structural and Functional Insights into the RNA Pseudoknots of the CRISPR-Cas12a Assemblies)</p>
                        <br></br>
                        <p><b id="time">10:45 - 11:10 : </b> IT-10 <b id="time"> Shruthi S Vembar</b> (Discovery and validation of novel compact RNA targeting CRISPR/Cas13 systems)</p>
                        <br></br>

                        <p><b id="time">11:10 - 11:40 : </b>Group Photo and Coffee/Tea Break</p>
                        <br></br>

                        {/* <!-- Session IV  --> */}
                        <h3>SESSION IV: Post-transcriptional Gene Regulations </h3>
                        <h4> Chair: Pankaj V. Alone and Shovamayee Maharana</h4>
                        <br></br>
                        <p><b id="time">11:40 - 12:05 : </b> IT-11 <b id="time">Vasudevan Seshadri</b> (PIP4K, a kinase with RNA binding activity)</p>
                        <br></br>
                        <p><b id="time">12:05 - 12:30 : </b> IT-12 <b id="time"> Arumugam Rajavelu</b> (Plasmodium falciparum YTH2 Domain Binds to m6A-Containing mRNA and Regulates Translation)</p>
                        <br></br>
                        <p><b id="time">12:30 - 12:55 : </b> IT-13 <b id="time"> Jomon Joseph</b> (Autophagy-dependent regulation of processing bodies (P-bodies))</p>
                        <br></br>

                        <p><b id="time">13:00 - 14:00 : </b>Lunch Break (Mentor Mentee Lunch)</p>
                        <br></br>

                        {/* <!-- Session V  --></br> */}
                        <h3>SESSION V: Flash Talks-II  </h3>
                        <h4> Chair: Pankaj V. Alone and Shovamayee Maharana</h4>
                        <br></br>
                        <p><b id="time">14:00 - 14:07 : </b> FT-6 <b id="time"> Sweta Tiwari</b> (RGG-motif protein Scd6 affects oxidative stress response by regulating Cytosolic caTalase T1 (Ctt1))</p>
                        <br></br>
                        <p><b id="time">14:07 - 14:14 : </b> FT-7 <b id="time"> Aditya Singha Roy</b> (Hidden in the Code: Exploring the Dynamic Interplay of 5ʹ-UTR Variants,uORFs, and RNA G Quadruplex in the regulation of human cIAPI gene expression)</p>
                        <br></br>
                        <p><b id="time">14:14 - 14:21 : </b> FT-8 <b id="time"> Debraj Manna</b> (Regulation of the expression of ribosomal proteins by small downstream ORFs)</p>
                        <br></br>
                        <p><b id="time">14:21 - 14:28 : </b> FT-9 <b id="time"> Koushick Sivakumar</b> (Emergence of an effective translation proofreader enabled the surge of proline-rich proteins in metazoans)</p>
                        <br></br>
                        <p><b id="time">14:28 - 14:35 : </b> FT-10 <b id="time">  Payal Gupta</b> (Tetraphenylethene Derivatives Modulate the RNA Hairpin-G-quadruplex Conformational Equilibria in Proto-Oncogenes)</p>
                        <br></br>
                        <p><b id="time">14:35 - 14:42 : </b> FT-11 <b id="time">  Akshay Chaudhari</b> (DRASTIC lncRNA may regulate DNA damage response via FUS dependent LLPS)</p>
                        <br></br>

                        <p><b id="time">14:45 - 16:45 : </b> Poster presentations and Coffee/Tea Break</p>
                        <br></br>

                        {/* <!-- Session VI  --> */}
                        <h3>SESSION VI: Ribosome Structure And Translational Control  </h3>
                        <h4> Chair: BiswadipDas and Rajat Banerjee</h4>
                        <br></br>
                        <p><b id="time">16:45 - 17:10 : </b> IT-14 <b id="time">  Jayati Sengupta</b> (Structural insights into the interplay of nascent chain processing factors with the 70S ribosome)</p>
                        <br></br>
                        <p><b id="time">17:10 - 17:35 : </b> IT-15 <b id="time">   Prem S. Kaushal</b> (Ribosome structure of pathogenic protozoan Entamoeba histolytica)</p>
                        <br></br>
                        <p><b id="time">17:35 - 18:00 : </b> IT-16 <b id="time">   Tanweer Hussain</b> (mRNA recruitment during protein synthesis in eukaryotes)</p>
                        <br></br>
                        <p><b id="time">18:00 - 18:30 : </b> IT-17 <b id="time">  Umesh Varshney</b> (Initiator tRNA-centric mechanisms of faithful translation initiation and ribosome maturation in bacteria)</p>
                        <br></br>

                        <p><b id="time">18:30 - 19:00 : </b> Felicitation Ceremony</p>
                        <p><b id="time">19:00 - 21:00 : </b> GALA DINNER</p>
                        <br></br>
                    </div>
                </div>
                {/* <!-- DAY3 --> */}
                <div className="container left">
                    <div className="box">
                        <span className="left-arrow"></span>
                        <h1>Day 3: Friday, 24 MAY 2024</h1>

                        {/* <!-- Session VII  --> */}
                        <h3>SESSION VII: RNA-Protein Interactions </h3>
                        <h4> Chair: Ansuman Lahiri and Mandar V Deshmukh</h4>
                        <br></br>
                        <p><b id="time">09:00 - 09:30 : </b> IT-18 <b id="time">Rajan Sankaranarayanan </b>(When Paul Berg meets Donald Crothers: An achiral connection through protein biosynthesis)</p>
                        <br></br>
                        <p><b id="time">09:30 - 09:55 : </b> IT-19 <b id="time">Dasaradhi Palakodeti </b>(Unravelling the role of Polyadenylation Machinery in asymmetric stem cell division)</p>
                        <br></br>
                        <p><b id="time">09:55 - 10:20 : </b> IT-20 <b id="time">Ritu Kulshreshtha </b>(Decoding the role and clinical relevance of Non-coding RNAs in Glioblastoma)</p>
                        <br></br>
                        <p><b id="time">10:20 - 10:45 : </b> IT-21 <b id="time">Mahavir Singh </b>(RNA pseudoknot at the core of bacterial type III toxin-antitoxin systems)</p>
                        <br></br>
                        <p><b id="time">10:45 - 11:10 : </b> IT-22 <b id="time"> Amanjot Singh</b>(Balanced interplay among the structured and disordered domains of RNA-binding protein)</p>
                        <br></br>
                        
                        <p><b id="time">11:10 - 11:40 : </b>Coffee/Tea Break</p>
                        <br></br>
                        
                        {/* <!-- Session VII  --> */}
                        <h3>SESSION VIII: RNA Splicing </h3>
                        <h4> Chair: Sandeep M. Eswarappaand Ashish Misra</h4>
                        <br></br>
                        <p><b id="time">11:40 - 12:05 : </b> IT-23 <b id="time">Sanjeev Shukla </b>(Unraveling the Nexus: Hypoxic Tumor Microenvironment and Alternative Splicing)</p>
                        <br></br>
                        <p><b id="time">12:05 - 12:30 : </b> IT-24 <b id="time">Indrani Talukdar </b>(Alternative splicing and its impact on the metabolic syndrome to stem cell differentiation)</p>
                        <br></br>
                        <p><b id="time">12:30 - 12:55 : </b> IT-25 <b id="time">Amaresh C. Panda  </b>(Discovering Transcriptome-wide Circular RNA Interaction with mRNAs)</p>
                        <br></br>

                        <p><b id="time">13:00 - 13:30 : </b>Prize Distribution and  Concluding Remarks</p>
                        <p><b id="time">13:30 - 14:30 : </b>Lunch Break and Departure</p>
                        <br></br>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Program;