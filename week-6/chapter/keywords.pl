#!"D:\xampp\perl\bin\perl.exe"

#Confirm that perl is located in the /usr/bin/perl folder
#of your Web server

#All perl scripts should use strict
use strict;

use CGI;
my $cgi_object = new CGI();

# Printout out the header
print $cgi_object->header();

# Retrieve the value of the suggest parameter 
my $input = $cgi_object->param('suggest');

# This is the hashtable holding a list of the SBlogger keywords
# This could just as easily placed in a MySQL database.

my @keys = (
    { key => "49ers" },
    { key => "76ers" },
    { key => "Angels" },
    { key => "Astros" },
    { key => "Athletics" },
    { key => "Baseball" },
    { key => "Basketball" },
    { key => "Bears" },
    { key => "Bengals" },
    { key => "Bills" },
    { key => "Blue Jays" },
    { key => "Bobcats" },
    { key => "Braves" },
    { key => "Brewers" },
    { key => "Broncos" },
    { key => "Browns" },
    { key => "Buccaneers" },
    { key => "Bucks" },
    { key => "Bulls" },
    { key => "Cardinals Baseball" },
    { key => "Cardinals Football" },
    { key => "Cavaliers" },
    { key => "Celtics" },
    { key => "Chargers" },
    { key => "Chiefs" },
    { key => "Clippers" },
    { key => "Colts" },
    { key => "Cowboys" },
    { key => "Cubs" },
    { key => "Diamondbacks" },
    { key => "Dodgers" },
    { key => "Dolphins" },
    { key => "Eagles" },
    { key => "Falcons" },
    { key => "Football" },
    { key => "Giants Football" },
    { key => "Giants Baseball" },
    { key => "Golf" },    
    { key => "Grizzlies" },
    { key => "Hawks" },
    { key => "Heat" },
    { key => "Hockey" },
    { key => "Hornets" },
    { key => "Indians" },
    { key => "Jaguars" },
    { key => "Jazz" },
    { key => "Jets" },
    { key => "Kings" },
    { key => "Knicks" },
    { key => "Lakers" },
    { key => "Lions" },
    { key => "Magic" },
    { key => "Mariners" },
    { key => "Marlins" },
    { key => "Mavericks" },
    { key => "Mets" },
    { key => "MLB" },
    { key => "Nationals" },
    { key => "NBA" },
    { key => "Nets" },
    { key => "NFL" },
    { key => "Nuggets" },
    { key => "Orioles" },
    { key => "Olympics" },    
    { key => "Pacers" },
    { key => "Packers" },
    { key => "Padres" },
    { key => "Panthers" },
    { key => "Patriots" },
    { key => "Phillies" },
    { key => "Pirates" },
    { key => "Pistons" },
    { key => "Premier League" },    
    { key => "Raiders" },
    { key => "Rams" },
    { key => "Raptors" },
    { key => "Ravens" },
    { key => "Red Sox" },
    { key => "Reds" },
    { key => "Redskins" },
    { key => "Rockets" },
    { key => "Royals" },
    { key => "Saints" },
    { key => "Seahawks" },
    { key => "Senators" },
    { key => "Soccer" },
    { key => "Spurs" },
    { key => "Steelers" },
    { key => "Suns" },
    { key => "Texans" },
    { key => "Tigers" },
    { key => "Timberwolves" },
    { key => "Titans" },
    { key => "Trail Blazers" },
    { key => "Twins" },
    { key => "Vikings" },
    { key => "Warriors" },
    { key => "White Sox" },
    { key => "Wizards" },
    { key => "Yankees" }
); 

# Keep track of the number of hits using the count variable
my $count = 0;

# Start printing the keyword hits in an array in JSON format
print "{\"matches\": [\n";

# Loop through the list of keys to locate the number of hits
foreach my $row (@keys) {
   if ( $row->{key} =~ /^$input/i) {
      $count++;
      if ($count == 1) {
         print "\"$row->{key}\"\n"
      } else {
         print ",\"$row->{key}\"\n"
      }

# Limit the number of hits to 5
      if ($count == 5) {
         last;
      }
   }
}

# Conclude printing the hits in JSON format
print "]\n}";