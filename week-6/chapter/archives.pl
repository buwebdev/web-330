#!"D:\xampp\perl\bin\perl.exe"

# Confirm that perl is located in the usr/bin/perl folder on the server

#All perl scripts should use strict
use strict;

use CGI;
my $cgi_object = new CGI();

# Print out the http header 
print $cgi_object->header();

# Retrieve the value of the skey parameter 
my $input = $cgi_object->param('skey');

# This is the hashtable storing a sample of archived articles in HTML format 
my @articles = (
    { searchkey => "Packers",
      content => "<h1>A Cheesy Monument</h1>
                  <h6>Keyword: Packers</h6>
                  <p>Green Bay native Jeff Miller   
                     loves Packers QB Brian Paulson. And he loves the
                     Packers. And he loves cheese. So what could be more 
                     natural than carving a life-size statue of his beloved 
                     player in a huge block of gouda? Speaking of natural, 
                     Jeff's wife is starting to complain about the natural 
                     odor of the monument. 'I suppose I'll have to give it 
                     up, ' sighed Jeff.</p>
                  <p>For his next creation, Jeff can do the entire porous GB 
                     defense ... in swiss cheese; or he can simply do a 
                     statue of beleaguered GB defense back Chris Conners in 
                     toast.</p>
                  <cite>Posted: 11/1/2024 @ 1:25 am</cite>"
    },
    { searchkey => "Astros",
      content => "<h1>DL on DL</h1>
                  <h6>Keyword: Astros</h6>
                  <p>Astro relief pitcher Dabne Lipscomb will be on the 
                     disable list for the next three weeks. It seems Dabne
                     cut the index finger on his throwing hand trying to open
                     his new XBox game with a pen knife. The game he couldn't wait to play? 
                     <i>Blade of Honor</i>.</p>
                  <p>Lipscomb is no stranger to unusual injuries.
                     Last year he was out for 3 weeks with a lower back injury
                     due to what he termed as a very <i>violent sneeze</i>.
                     The year before that he was laid up due to an alergic
                     reaction to pine tar.
                     It would seem that Lipscomb's initials are not DL for
                     nothing!</p>
                  <cite>Posted: 6/14/2024 @ 3:12 pm</cite>"
    },
    { searchkey => "Baseball",
      content =>"<h1>Basebrawl</h1>
                  <h6>Keyword: Baseball</h6>
                  <p>Pittsburgh and
                     Los Angeles ended their seasons with the biggest bench-clearing
                     brawl of the year. Apparently with nothing to play 
                     for, but plenty to fight for, six players were ejected,
                     including Pirate skipper, Whyte Kohlmann.
                  </p>
                  <p>The fight started when Pirate pitcher, Gary Tribbit
                     hit LA slugger, Yale
                     Iverson in retaliation for Iverson's 3rd-inning
                     homerun. 'I thought he spent a little too much time
                     trotting around
                     the bases,' explained Tribbit. Given
                     Iverson's anemic 185 batting average, you have
                     to give him the benefit of the doubt. It was  the
                     first time he's cleared the yard this year and 
                     he was probably in a state of shock.
                  </p>
                  <cite>Posted: 9/18/2024 @ 12:05 pm</cite>"
    },
    { searchkey => "Baseball",
      content =>"<h1>Hit by a No Hitter</h1>
                  <h6>Keyword: Baseball</h6>
                  <p>Ken Bryce of the Double A Tipton Turbines threw
                     a  no hitter against Clinton last week. Of course just 
                     because there were no hits, doesn't means there weren't
                     <em>any hits</em>. There were three of them: 
                     all beanballs thrown by a often wild Bryce. 
                     No runs resulted as Tipton beat Clinton
                     2 - 0.
                  </p>
                  <cite>Posted: 8/9/2024 @ 8:11 pm</cite>"
    },    
    { searchkey => "Basketball",
      content => "<h1>Jenkins on Ice</h1>
                  <h6>Keyword: Basketball</h6>     
                  <p>Retired NBA star Dennis Jenkins announced today that 
                     he has signed a contract with <em>Long Sleep</em> to
                     have his body frozen before death, to be revived only 
                     when medical science has discovered a cure to the aging
                     process.
                  </p>
                  <p>'Lots of guys get frozen for cancer and stuff, '
                     explains the always-entertaining Jenkins, 'I just want
                     to return once they can give me back my eternal youth.'
                     [sic] Perhaps Jenkins is also hoping medical science can 
                     cure his free-throw shooting  - 47% and falling during 
                     his last year in the league.</p>
                  <p>A reader tells us that Jenkins may not be aware that
                     part of the <em>Long Sleep</em> process is to remove the             
                     head, keeping only the brain to be revived. This would 
                     be a problem for Jenkins since he would be left with his 
                     least-valuable asset.</p>
                  <cite>Posted: 8/10/2024 @11:39 am</cite>"
    },
    { searchkey => "Texans",
      content => "<h1>Check that Pen!</h1>
                  <h6>Keyword: Texans</h6>
                  <p>After a long holdout, ESPN is reporting that Houston 
                     Texans running back JT Olson has come to terms with the 
                     team, signing a three-year deal for $12 million. 'I'm 
                     really happy with the contract,' claims JT, 'and I'm 
                     looking forward to holding out again next year for an 
                     even bigger contract after I win the rushing title!'</p>
                  <p>My advice to the Texans: Check JT's pen to make sure 
                     it wasn't filled with disappearing ink!</p>
                  <cite>Posted: 8/9/2024 @ 10:31 pm</cite>"
    },
    { searchkey => "Golf",
      content => "<h1>Physician Heal Thyself</h1>
                  <h6>Keyword: Golf</h6>
                  <p>Gilbert Gott missed the cut at the PGA Championship after carding
                     a snowman on the final hole with four putts inside of 5 feet.
                     Gott got gone without speaking to the press, claiming that he had to get
                     home to Sarasota to host a high-priced golfing clinic.</p>
                  <p>The theme of the clinic? <em>Golf like Gott</em>.
                     I don't need to attend his golfing clinic.
                     Check my scorecard: I've been golfing like Gott for 20
                     years!</p>
                  <cite>Posted: 8/11/2024 @ 6:42 pm</cite>"
    }     
    
); 

# Keep track of the number of hits using the count variable
my $count = 0;
foreach my $row (@articles) {
   if ( $row->{searchkey} =~ /^$input$/i) {
      $count ++;
      print "$row->{content}"
   }
}

# If no hits, print this fact
if ($count == 0) {
   print "<h1>No Articles Found</h1><p>Come back again, we're still setting up our database!</p>";
}