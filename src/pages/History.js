import React from "react"
import Layout from "../components/Layout"
//import Card from "react-bootstrap/Card"
// import FigureImage from "react-bootstrap/FigureImage"
// import FigureCaption from "react-bootstrap/FigureCaption"
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"
import "../styles/History.css"

export default () => (
  <Layout>
    <h1>The Pacific War</h1>
    <p>
      Hello and welcome to the History page of my website. One of my passions in
      school has always been history. I want to share with you my knowledge of
      my favorite part of world history; the Pacific War. My goal with this
      website is to educate people on one of America's finest hours. Posting
      every Saturday, so stay tuned.
    </p>
    <h2>Background</h2>
    <p>
      <h3>Japanese Invasion of Manchuria: 1937</h3>
      <i>
        {" "}
        <b>
          The reason was the failure of both Japan and China to understand each
          other and the inability of America and the European powers to
          sympathize, without prejudice, with the peoples of East Asia.
          <br></br>-Hideki Tojo, Japanese Prime Minister
        </b>
      </i>
      <br></br>
      <br></br>
      <i>
        <b>
          Japan cannot conquer China with America in her rear, Soviet Russia on
          her right and England on her left - her most powerful enemies in the
          South Sea all flanking her. It is this international situation that
          constitutes one of Japan's great weaknesses.
          <br></br>-Chiang Kai Shek, Chinese Military Leader
        </b>
      </i>
      <br></br>
      <br></br>
      The origins of the Pacific War can be traced all the way back to the end
      of World War I in 1918 during the Treaty of Versailles negotiations. Japan
      and the US had fought as the Allies with Britain, France, and Russia
      (pulled out in 1917) during World War I. They faced the Central Powers who
      were Germany, Austria-Hungary, Bulgaria, and the Ottoman Empire. As a
      result of the talks, Germany was forced to make reparation payments to all
      of the allied powers except for two nations: Russia and Japan. Japan,
      after being shunned by the Allies at the Versailles conference, were
      deeply angered. During the 1920s, Japan started to build up its army with
      fresh recruits, its navy with new, fast ships, and its air wing with new
      fighter and bomber variants. As Hitler came to power in Germany during the
      1920s and 1930s, the power of the Japanese government had switched from
      the Emperor to military generals and admirals. They formed an oligarchy
      and kept the Emperor out from any military affairs. The armed forces in
      Japan had ultimate control and decided what the country was going to do
      during the Pacific War. These generals kept the Emperor Hirohito as a
      figurehead of the government. One of these generals who grabbed the reigns
      of power was Hideki Tōjō. Tōjō was born in the Kōjimachi district of Tokyo
      in 1884. Tōjō was born into a military family and joined the army in 1905.
      He joined the army in the closing days of the Russo-Japanese War in 1905.
      In 1934, Tōjō was promoted to the rank of major general. He was strongly
      opposed to the coup that was planned in 1936 on the Emperor. In 1937, Tōjō
      led the invasion on the Chinese province of Manchuria along with generals
      Shigeru Honjō, Jirō Tamon, and Senjuro Hayashi. The 7th Japanese division
      entering Manchuria was numbered at 60,450 men facing off against a 160,000
      man Chinese resistance. The Japanese force under Tamon attacked southern
      Manchuria in 1931 with the Jinzhou operation and occupied the city of
      Jinzhou and Nanjing. The Chinese government, led by Chiang Kai Shek was
      forced to resign and the Japanese took most of southern Manchuria. A
      northern offensive in early 1932 by Tamon raided the city of Harbin and
      completed the invasion. The Chinese leader in the north, Ma Zhanshan was
      forced to join the new Japanese backed government in Manchuria. The
      invasion of Manchuria proved to be the first offensive grab by Japan into
      Asia and the Pacific. The blitzkrieg of Japanese troops took the Chinese
      completely by surprise and led to the outbreak of the Second Sino-Japanese
      war which began in 1937.
      <br></br>
      <CardDeck>
        <Card>
          <Card.Img
            border="0"
            src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Hideki_Tojo.jpg"
            alt="Tojo"
            height="300"
            variant="top"
          />
          <Card.Body>
            <Card.Title>Tojo Hideki</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            border="0"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Shigeru_Honjo.jpg/220px-Shigeru_Honjo.jpg"
            alt="Shigeru"
            height="300"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Shigeru Honjo</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            border="0"
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Chiang_Kai-shek%EF%BC%88%E8%94%A3%E4%B8%AD%E6%AD%A3%EF%BC%89.jpg/220px-Chiang_Kai-shek%EF%BC%88%E8%94%A3%E4%B8%AD%E6%AD%A3%EF%BC%89.jpg"
            alt="Chiang Kai-Shek"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Chiang Kai-Shek</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            border="0"
            src="http://vignette4.wikia.nocookie.net/totalwar-ar/images/8/80/Ma_Zhanshan.jpg/revision/latest?cb=20160829185254"
            alt="Ma"
            height="300"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Ma Zhanshan</Card.Title>
          </Card.Body>
        </Card>
      </CardDeck>
      <CardDeck>
        <Card>
          <Card.Img
            border="0"
            height="300"
            src="https://lyndenpacifictheater.files.wordpress.com/2014/04/ija_infantry_in_manchuria.jpg"
            alt="Japanese soldiers enter Manchuria"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Japanese soldiers enter Manchuria</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            border="0"
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Mukden_1931_japan_shenyang.jpg/250px-Mukden_1931_japan_shenyang.jpg"
            alt="Shneyang"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              Japanese soldiers enter the city of Shenyang following the Mukden
              incident
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            border="0"
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Senjuro_Hayashi_suit.jpg/220px-Senjuro_Hayashi_suit.jpg"
            alt="Senjuro"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Senjuro Hayashi</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            src="https://i.ebayimg.com/images/g/GKYAAOSwImRYhRtF/s-l300.jpg"
            alt="Jiro"
            height="300"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Jiro Tamon</Card.Title>
          </Card.Body>
        </Card>
      </CardDeck>
    </p>
    <p>
      <h3>Second Sino-Japanese War: 1939-1945</h3>
      <i>
        <b>
          Keep men, lose land: land can be taken again. Keep land, lose men:
          land and men are both lost.
          <br></br>-Mao Zedong, Chinese Communist Leader, Future Chinese
          President
        </b>
      </i>
      <br></br>
      <br></br>
      <i>
        <b>
          We shall not lightly talk about sacrifice until we are driven to the
          last extreme which makes sacrifice inevitable.
          <br></br>-Chiang Kai-Shek, Chinese Nationalist Leader
        </b>
      </i>
      <br></br>
      <br></br>
      The Japanese invasion of Manchuria in 1937 became the precursor to the
      Second Sino-Japanese War which marked a six year conflict between China
      and Japan. For hundreds of years, China and Japan had been at each other's
      throats. This war with Japan and China had become more mechanized and
      deadly than previous wars. The Japanese took Manchuria and thus kept it
      until 1945 when the USSR invaded it. The war started initially with Japan
      taking over cities such as Harbin and Shanghai. Chiang Kai-Shek in
      response took a force and surrounded the Japanese International Settlement
      in Shanghai. The siege became a full scale battle and turned into the
      Battle of Shanghai. The Chinese launched airstrikes which hit the
      settlement. In response, the aircraft carrier force of the Japanese Navy
      launched many sorties into China. The fledgling Chinese Air Force was old
      and was comprised of World War I era biplanes. They were no match for the
      industrialized Japanese Air Force and Naval Air Arm which comprised of
      fast fighters and bombers. Examples were the Mitsubishi G4M "Betty" and
      the Nakajima Ki-27 "Nate". Many Chinese leaders knew that they would lose
      the war if the Japanese Navy and Air Force choked their supply lines from
      India and Burma. Chiang Kai-Shek made a deal with the General Claire Lee
      Chennault of the US Air Force. Chennault vowed to provide the Chinese with
      American pilots and planes to help address the Japanese atrocities. The
      American Volunteer Group or AVG was formed and became known throughout the
      world as the Flying Tigers. The Flying Tigers were the first time that
      Americans fought the Japanese in combat. The American and Chinese pilots
      accounted for 300 aerial victories in the new P-40 Warhawk. The skill of
      these pilots took the Japanese completely by surprise and caused them to
      halt bombings in mainland China. One of the major events of the
      Sino-Japanese War was the Nanking Massacre. After Japanese occupiers took
      control of the city of Nanking, they proceeded to rape and kill over
      40,000-300,000 people. The Japanese showed their brutality to the world
      after the event became publicized. The world was shocked at what happened
      and remains one of the darkest periods in Chinese and world history. The
      war also marked the growing divide of the Communist party of China and the
      Nationalist party. Mao Zedong rose as one of the leading figures of the
      Communist party and Chiang Kai-Shek led the Nationalist party. After World
      War II, Mao Zedong and Chiang Kai-Shek would go to war over the idea of
      communism and would lead to a change in Chinese politics that continues
      into the modern era. The Second Sino-Japanese War marked the precursor to
      many events in Asia and the Pacific War as a whole.
      <br></br>
      <CardDeck>
        <Card>
          <Card.Img
            border="0"
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Shanghai1937KMT_machine_gun_nest.jpg/240px-Shanghai1937KMT_machine_gun_nest.jpg"
            alt="Chinese MG nest"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Chinese Machine Gun Nest</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            border="0"
            height="300"
            src="https://s-media-cache-ak0.pinimg.com/236x/09/73/a0/0973a098322540b5e22d526c7545532f.jpg"
            alt="Biplane"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Chinese Air Force Biplane.</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            border="0"
            height="300"
            src="http://upload.wikimedia.org/wikipedia/commons/5/58/Ki-27_2.jpg"
            alt="Nate"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Japanese Ki-27 "Nate"</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            border="0"
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Claire_L._Chennault.jpg/220px-Claire_L._Chennault.jpg"
            alt="Chennault"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Claire Lee Chennault</Card.Title>
          </Card.Body>
        </Card>
      </CardDeck>
      <CardDeck>
        <Card>
          <Card.Img
            border="0"
            height="300"
            src="http://i2.cdn.cnn.com/cnnnext/dam/assets/160920082228-flying-tigers-3rd-squadron-hells-angels-exlarge-169.jpg"
            alt="Flying Tigers"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Flying Tigers</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            border="0"
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Nanking_bodies_1937.jpg/300px-Nanking_bodies_1937.jpg"
            alt="Nanking"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Nanking after the Massacre</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            border="0"
            height="300"
            src="https://250722-778774-raikfcquaxqncofqfm.stackpathdns.com/images/handbook/entries/CC/chiang_soong_chennault.jpg"
            alt="Chennault+Chiang Kai-Shek"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Claire Chennault and Chiang Kai-Shek</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            border="0"
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Mao_1925.jpg/220px-Mao_1925.jpg"
            alt="Mao"
          ></Card.Img>
          <Card.Body>
            <Card.Title>A young Mao Zedong</Card.Title>
          </Card.Body>
        </Card>
      </CardDeck>
    </p>
    <p>
      <h3>Japanese Moves In the Pacific: 1940-1942</h3>
      After the successful invasion of China, Japan was eager to extend its
      empire across the Pacific. Japan as an island nation, needed to expand and
      conquer many other nations to keep their war machine going. Their ships,
      planes, and army needed oil to continue to function. An invasion across
      the Pacific would also give them notoriety, and gain the attention of
      Germany and Italy. In 1940, the Japanese started their campaign. They
      invaded Vichy French Indochina which comprised of present day Vietnam,
      Cambodia, and Laos. The French had turned the colony into a natural
      resources base which supplied rubber and tea. A few days after the
      invasion, Japan withdrew from the League of Nations and signed a military
      alliance with Germany and Italy thus forming the Axis Powers. The Japanese
      then moved on to Malaya, Singapore, and the Dutch East Indies. These
      nations had big oil reserves, and provided the Japanese a base to anchor
      ships, and to conduct their offensives into India, Australia, and the
      South Pacific. As a response, the US, Australia, France, Britain, and the
      Netherlands imposed a natural resource embargo on Japan. After the
      embargo, the Japanese further expanded into the Caroline, Gilbert,
      Solomons, and Marianas islands. With their territorial gains, the Allied
      powers knew that war would be imminent with Japan.
      <br></br>
      <CardDeck>
        <Card>
          <Card.Img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Japanese_base_at_Dublon_Island_Truk_in_February_1944.jpg"
            alt="Truk"
            height="300"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              Truk Atoll in the Caroline Islands as a Japanese Base.
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Japanese_troops_entering_Saigon_in_1941.jpg/300px-Japanese_troops_entering_Saigon_in_1941.jpg"
            alt="Indochina"
            width="200"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Japanese forces entering Saigon in Vietnam.</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Ww2_131.jpg"
            alt="Philippines"
            width="200"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              Japanese forces move through the Philippines.
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://ww2days.com/images/Holland_Japanese_attacks_Dutch_East_Indies_1_580x396.jpg"
            alt="Map of Dutch East Indies invasion"
            width="200"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              {" "}
              Map of Japanese expansion in the Dutch East Indies (modern day
              Indonesia).
            </Card.Title>
          </Card.Body>
        </Card>
      </CardDeck>
    </p>
    <h2>The Beginning</h2>
    <p>
      <h3>Pearl Harbor: December 7th, 1941</h3>
      <i>
        <b>
          Yesterday, December 7, 1941—a date which will live in infamy—the
          United States of America was suddenly and deliberately attacked by
          naval and air forces of the Empire of Japan.
          <br></br>-Franklin Delano Roosevelt, President of the United States
        </b>
      </i>
      <br></br>
      <br></br>
      <i>
        <b>
          I fear all we have done is to awaken a sleeping giant and fill him
          with a terrible resolve.
          <br></br>-Isoroku Yamamoto, Supreme Japanese Naval Commander
        </b>
      </i>
      <br></br>
      <br></br>
      On November 26th, 1941, a Japanese naval force left the home islands of
      Japan bound for Pearl Harbor in the Hawaiian islands. Their mission was to
      attack the US naval station and sink as many battleships and aircraft
      carriers as possible. The force was led by six aircraft carriers: Kaga,
      Akagi, Soryu, Hiryu, Shokaku, and Zuikaku. Accompanying them were the
      battleships Hiei and Kirishima, heavy cruisers Tone and Chikuma, light
      cruiser Abukuma, and 9 destroyers. The Japanese force reached the waters
      off Oahu on December 6th, 1941. In the morning hours of December 7th, the
      Japanese prepared and launched the first wave of dive and torpedo bombers.
      The aircraft force consisted of 89 Nakajima B5N "Kate" torpedo bombers, 51
      Aichi D3A "Val" dive bombers, and 43 Mitsubishi A6M "Zero" fighters. They
      large force was detected by radar stations on Oahu, but was ignored
      because they were mistaken as Boeing B-17 bombers from California. The
      torpedo bombers reached Pearl at 7:48 am local time. The torpedo bombers
      sought the US Battleship force in the harbor while the dive bombers
      attacked nearby Hickam and Wheeler army air field. The battleship line was
      famously nicknamed "Battleship Row". The "Kate" torpedo bombers in the
      first wave sunk the battleships Arizona and Utah. The battleship Nevada
      tried to exit the harbor while under attack, but was sunk by two
      torpedoes. The first wave was replaced by a second wave which sunk
      battleships Oklahoma, West Virginia, California, Tennessee, Maryland, and
      Pennsylvania. The entire air arm of Hickam and Wheeler airfield were
      suppressed from launching a successful counterattack. The strike aircraft
      of the Japanese returned to their carriers at 1:00 pm local time. The main
      fleet units of the United States that were missing at Pearl Harbor were
      the aircraft carriers, Enterprise, Lexington, and Saratoga. The failure of
      the Japanese to sink the US carriers proved to be one of the major
      downfalls of the Japanese empire throughout World War II. On December 8th,
      1941 President Franklin Delano Roosevelt managed to pass a declaration of
      war through Congress towards Japan. The US Congress also passed
      declarations of war on Germany and Italy. World War II had officially
      begun for the United States.
      <br></br>
      <CardDeck>
        <Card>
          <Card.Img
            height="300"
            src="https://s-media-cache-ak0.pinimg.com/originals/19/ca/e5/19cae5b7574da72423ca44990a7e58f3.jpg"
            alt="Kate leaving Shokaku"
            width="400"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              A "Kate" torpedo bomber leaves aircraft carrier Shokaku
            </Card.Title>
          </Card.Body>
        </Card>
        {/* <Card>
        <Card.Img
          height="400"
          src="https://c1.staticflickr.com/4/3289/2330916553_c680d1dd6f_b.jpg"
          alt="Battleship Row"
          width="400"
        ></Card.Img>
        <Card.Body>Battleship Row</Card.Body>
      </Card> */}
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Attack_on_Pearl_Harbor_Japanese_planes_view.jpg/1200px-Attack_on_Pearl_Harbor_Japanese_planes_view.jpg"
            alt="Attack on Pearl Harbor"
            width="400"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Japanese planes attacking Pearl Harbor</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://www.nist.gov/sites/default/files/images/2017/06/29/uss_arizona_burning_after_japanese_attack.jpg"
            alt="USS Arizona"
            width="400"
          ></Card.Img>
          <Card.Body>
            <Card.Title>USS Arizona sinking</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://www.defensemedianetwork.com/wp-content/uploads/2011/12/Pearl_harborBB-Row.jpg"
            alt="Carnage on American Ships"
            width="400"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Three US Battleships on fire and sunk</Card.Title>
          </Card.Body>
        </Card>
      </CardDeck>
      <CardDeck>
        <Card>
          <Card.Img
            height="300"
            src="https://sites.google.com/a/bsd7.org/america-combo/_/rsrc/1429735646178/workshops/-a-day-of-infamy-analyzing-fdr-s-speech/fdr0906b1.jpg"
            alt="FDR Pearl Harbor"
            width="400"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              President Franklin D. Roosevelt addressing Congress
            </Card.Title>
          </Card.Body>
        </Card>
        {/* <Card>
        <Card.Img
          height="1000"
          src="https://c1.staticflickr.com/4/3289/2330916553_c680d1dd6f_b.jpg"
          alt="Battleship Row"
        ></Card.Img>
        <Card.Body>Battleship Row</Card.Body>
      </Card> */}
        <Card>
          <Card.Img
            height="300"
            src="https://www.gchq.gov.uk/images/Japanese_planes_prepare_to_attack_Pearl_Harbor-768x512px.jpg"
            alt="Ready to attack!"
            width="400"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              Mitsubishi A6M Zeros ready on the flight deck of a Japanese
              carrier prior to the attack
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://nationalinterest.org/sites/default/files/main_images/A633%20%281%29.jpg"
            alt="Destroyed B-17"
            width="400"
          ></Card.Img>
          <Card.Body>
            <Card.Title>A destroyed B-17 following the attack.</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQipjkrBzqzlFkRYOoiw5nXbZlk-0tyLI-NheHBOyQQO8cQSAjf&usqp=CAU"
            alt="Hickam Airfiled"
            width="400"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              Hickam Airfield burning after the first Japanese attack
            </Card.Title>
          </Card.Body>
        </Card>
      </CardDeck>
    </p>
    <p>
      <h3>First Indian Ocean Raid: March 31st, 1942 - April 10th, 1942</h3>
      <i>
        <b>
          The most dangerous moment of the War, and the one which caused me the
          greatest alarm, was when the Japanese Fleet was heading for Ceylon and
          the naval base there. The capture of Ceylon, the consequent control of
          the Indian Ocean, and the possibility at the same time of a German
          conquest of Egypt would have closed the ring and the future would have
          been black.
          <br></br>-Winston Churchill, Prime Minister of the United Kingdom
        </b>
      </i>
      <br></br>
      <br></br>
      After raiding the naval base at Pearl Harbor, the Japanese aircraft
      carrier force was sent to the eastern Pacific to raid British coastal
      bases at Ceylon (modern day Sri Lanka), Singapore, and Trincomalee island.
      The attack was designed to wipe out British fleet units that would attempt
      to attack the Japanese invasions of India, Burma, or Australia. The
      Japanese force under Admiral Chuichi Nagumo comprised of six aircraft
      carriers (Akagi, Soryu, Hiryu, Shokaku, Zuikaku, Ryujo), four battleships
      (Kongo, Hiei, Kirishima, Haruna), five cruisers (Tone, Chikuma, Abukuma,
      Suzuya, Kumano), and 19 destroyers left the Celebes islands for Ceylon.
      Meanwhile, the British Force A and Force B was under the command of Sir
      James Somerville. Force A had two aircraft carriers (HMS Formidable, HMS
      Indomitable), and 1 battleship (HMS Warspite). Force B had one aircraft
      carrier (HMS Hermes), four battleships (HMS Revenge, HMS Royal Sovereign,
      HMS Ramilles, HMS Resolution), and two cruisers (HMS Cornwall, HMS
      Dorsetshire). Somerville left the Maldives to intercept. On April 5th,
      1942, the Japanese launched dive and torpedo bomber assaults on Colombo,
      Ceylon. The Japanese carriers sunk British destroyer HMS Tenedos, and
      cruiser HMS Hector. The cruisers Kumano and Suzuya sunk five merchant
      ships in the harbor. The Japanese aircraft also located Force B and sunk
      HMS Hermes. Nagumo's force chased HMS Cornwall, and HMS Dorsetshire until
      they were sunk off the Maldives. After the raid on Colombo, the Japanese
      moved to Trincomalee where they sunk more British merchant shipping. The
      raid was a success for the Japanese who had sunk many tons of shipping by
      using their aircraft carriers. However, the British Eastern Fleet was
      saved thanks to Somerville's retreat. Thanks to the fear of Japanese
      carrier attacks, the British did not challenge the later raids on Darwin
      in Australia and the invasion of Guadalcanal.
      <br></br>
      <CardDeck>
        <Card>
          <Card.Img
            height="300"
            src="https://movingimages.files.wordpress.com/2012/04/indian-ocean-raid-april-1942.jpg"
            alt="Indian Ocean Raid"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Map of the First Indian Ocean Raid</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/GF_in_Indian_Ocean%2C_1942.jpg/220px-GF_in_Indian_Ocean%2C_1942.jpg"
            alt="Japanese Carrier force"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Japanese Fast Aircraft Carrier Force</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dorsetshire%26Cornwall.jpg/300px-Dorsetshire%26Cornwall.jpg"
            alt="British cruisers sinking"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              HMS Cornwall and HMS Dorsetshire under attack
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://pacificeagles.net/wp-content/uploads/2017/02/Zuikaku_Indian_Ocean_April_1942-678x381.jpg"
            alt="Japanese attack Colombo"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Japanese aircraft prepare to attack Colombo</Card.Title>
          </Card.Body>
        </Card>
      </CardDeck>
    </p>
    <p>
      <h3>The Doolittle Raid: April 18th, 1942</h3>
      <i>
        <b>
          An attack on the Japanese homeland would cause confusion in the minds
          of the Japanese people and sow doubt about the reliability of their
          leaders.… Americans badly needed a morale boost.
          <br></br>-Lt. Col James Doolittle, US Air Force
        </b>
      </i>
      <br></br>
      <br></br>
      <i>
        <b>
          Those bombers must have come from 'our new base in Shangri-La'
          <br></br>-Franklin Roosevelt in response to a question on the
          Doolittle Raid
        </b>
      </i>
      <br></br>
      <br></br>
      The Doolittle Raid was an aerial assault and strategic bombing run on the
      Japanese mainland and capital city of Tokyo. After the attacks on Pearl
      Harbor, the US war effort had barely gotten under way. Morale was at an
      all time low in the country. With the Axis forces wreaking havoc in
      Europe, the North Atlantic, and the Pacific, the US Navy devised the
      Doolittle Raid using two of the three new Yorktown class aircraft
      carriers. The carriers USS Enterprise and USS Hornet, cruisers
      Northampton, Vincennes, Nashville, and Salt Lake City, and eight
      destroyers were to shuttle Colonel Jimmy Doolittle and his land based
      bomber squadron of B-25 Mitchells to 200 miles off the coast of Japan.
      This would ensure enough fuel to take off, bomb Tokyo, and make it inland
      to mainland China. On April 17th, 1942, the Navy task force began radio
      silence. On the morning of April 18th however, the task force came across
      the Japanese picket boat Nitto Maru. After repeated gun salvos from USS
      Nashville, the Nitto Maru sank. Fears that the picket boat was able to
      radio the task force's position cause Admiral Mark Mitscher to give the
      order to launch the B-25s from USS Hornet at 750 miles from Japan.
      Doolittle readied his men for the mission. At 8:20 am local time,
      Doolittle launched his aircraft from the 467 foot strip of USS Hornet. The
      bombers had never taken off from the deck of an aircraft carrier.
      Consequently, many of the bombers nearly struck the water. However, the
      bombers made it off Hornet safely. The bombers hit many industrial
      factories in Tokyo, Osaka, Kobe, Yokosuka, and Nagoya. Doolittle headed
      west to the East China Sea where all but one of his bombers ditched. The
      bomber pilots were eventually rescued and Doolittle was awarded the Medal
      of Honor. The other B-25, piloted by Edward York landed and was interned
      in the Soviet Union. Overall, the raid was a success in that it increased
      morale in the US by giving Japan a "Pearl Harbor" of their own. It also
      showed that the US could stealthily strike Japan thanks to its carrier
      force. On the other hand, the bomb hits only caused superficial damage to
      the factories which still kept them in Japan's war effort. It wasn't quite
      like Pearl Harbor where the capabilities of the US Navy were severely
      reduced. Japan enjoyed this naval advantage all the way up until
      Guadalcanal.
      <br></br>
      <CardDeck>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Dolittle_Raider%2C_Plane_1.jpg/1280px-Dolittle_Raider%2C_Plane_1.jpg"
            alt="Doolittle and his men"
            width="200"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              Colonel Doolittle and his B-25 flight crew aboard Hornet
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/USS_Hornet_%28CV-8%29_with_USS_Gwin_%28DD-433%29_during_Doolittle_Raid_1942.jpg/1280px-USS_Hornet_%28CV-8%29_with_USS_Gwin_%28DD-433%29_during_Doolittle_Raid_1942.jpg"
            alt="B-25s on Hornet"
            width="200"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Hornet with her task force and the B-25s</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://www.ibiblio.org/hyperwar/OnlineLibrary/photos/images/g320000/g324232.jpg"
            alt="USS Enterprise Escort"
            width="200"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              USS Fanning escorting USS Enterprise on the Doolittle Raid
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/DoolittleRaiders_China_h97502.jpg"
            alt="Doolittle and his men with the Chinese"
            width="200"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Doolittle and his men with the Chinese</Card.Title>
          </Card.Body>
        </Card>
      </CardDeck>
      <CardDeck>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/208-PU-52-LL-12_%2834371208606%29.jpg/220px-208-PU-52-LL-12_%2834371208606%29.jpg"
            alt="Doolittle Medal of Honor"
            width="200"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Doolittle receiving the Medal of Honor</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Army_B-25_%28Doolittle_Raid%29.jpg/300px-Army_B-25_%28Doolittle_Raid%29.jpg"
            alt="B-25 taking off from Hornet"
            width="auto"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              A B-25 lifts off from the carrier USS Hornet for Japan
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://secure-images.rarenewspapers.com/ebayimgs/6.17.2015/image020.jpg"
            alt="LA Times Doolittle"
            width="200"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              Los Angeles Times headline about the Doolittle Raid
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/No.23-NittoMaru-1942.jpg"
            alt="Nitto Maru"
            width="200"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              Nitto Maru sinking after hits from US cruiser Nashville
            </Card.Title>
          </Card.Body>
        </Card>
      </CardDeck>
    </p>
    <p>
      <h3>Battle of the Coral Sea: May 4th-8th, 1942</h3>
      <i>
        <b>
          Up to the time of Coral Sea, I had only read in Hemmingway's novels
          about "the sweet smell of death". The area was a full disaster, and I
          realized what the "sweet smell of death" really was. There were parts
          and particles; some ship, some shipmate.
          <br></br>-Otis Knight, Seaman First Class, USS Yorktown
        </b>
      </i>
      <br></br>
      <br></br>
      <i>
        <b>
          The Tulagi operation was certainly disappointing in terms of
          ammunition expended to results obtained
          <br></br>-Fleet Admiral Chester Nimitz
        </b>
      </i>
      <br></br>
      <br></br>
      The Battle of the Coral Sea was the first aircraft carrier engagement in
      the Pacific War. The United States was looking to halt Japanese expansion
      in the Dutch East Indies and the Solomon Islands. Japan's future ambitions
      also included capturing Port Moresby in New Guinea and also the invasion
      of Australia. The Japanese Combined fleet-under Isoroku Yamamoto and
      Shigeyoshi Inoue-was dispatched to begin the operation to take Port
      Moresby. After intercepting the Japanese transmissions about Port Moresby,
      Admiral of the Pacific Chester Nimitz and Admiral Frank J. Fletcher
      scrambled Task Force 17 made up of aircraft carriers USS Yorktown and USS
      Lexington, cruisers Minneapolis, Astoria, New Orleans, Chester, Portland,
      HMAS Australia, HMAS Hobart, Chicago, and 13 destroyers. The superior
      Japanese force contained carriers Shokaku, Zuikaku, and Shoho, cruisers
      Tenryu, Tatsuma, Aoba, Furutaka, Kinugasa, Kako, Myoko, Haguro, and 15
      destroyers. Before Task Force 17 made it into the Coral Sea, the Combined
      Fleet had invaded Tulagi island in the Solomon islands on May 3rd, 1942.
      On the morning of May 7th, Fletcher launched his strike aircraft from
      carriers Yorktown and Lexington. The SBD Dauntless dive and TBD Devastator
      torpedo bombers encountered the light carrier Shoho and sunk her.
      <br></br>
      <br></br>
      Meanwhile, Japanese airstrikes from Shokaku and Zuikaku had discovered
      destroyer Sims and fleet oiler Neosho. The Val dive bombers and Kate
      torpedo bombers had sunk Neosho and badly damaged Sims. Both aircraft
      carrier forces had not sighted each other on the first day. On May 8th,
      the US strike aircraft located the Japanese carriers Shokaku and Zuikaku.
      Shokaku had received three 1,000 lb bombs which severely damaged her
      flight and hangar deck. The decision was made to withdraw Shokaku.
      However, the Japanese strike aircraft had also sighted Yorktown and
      Lexington. Yorktown avoided the torpedo bomber assaults, but Lexington was
      hit with two Type 91 Long Lance torpedoes which ruptured her aviation fuel
      storage. Fuel vapors began to spread throughout the ship. Lexington then
      took two bomb hits which caused fires. Yorktown took a bomb hit that
      penetrated four decks and killed 66 men. Many of the Japanese strike
      aircraft were shot down by Yorktown and Lexington strike aircraft.
      Lexington suffered two massive explosions following the strike and began
      to list. Her men abandoned ship, and she was left to sink. Yorktown and
      the rest of Task Force 17 retreated south to New Caledonia, while the
      Combined Fleet retreated North to Truk Atoll. The United States took a
      major blow by losing one of its fleet carriers and not sinking one of the
      Japanese fleet carriers. However, the United States had prevented the
      capture of Port Moresby. Defense of the port was left to the British and
      the Australians. Coral Sea was a Japanese tactical victory, but a United
      States strategic victory.
      <br></br>
      <CardDeck>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Zuikaku_air_raid.jpg/220px-Zuikaku_air_raid.jpg"
            alt="Zuikaku air raid"
            width="200"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Aircraft readying on Zuikaku</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Coral_Sea_Neosho_Burning.jpg/220px-Coral_Sea_Neosho_Burning.jpg"
            alt="Neosho burning"
            width="200"
          ></Card.Img>
          <Card.Body>
            <Card.Title>USS Neosho on fire and sinking</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Shoho_g17026.jpg/220px-Shoho_g17026.jpg"
            alt="Shoho on fire"
            width="200"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Shoho on fire and sinking</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Coral_Sea_Japanese_Type_99.jpg/220px-Coral_Sea_Japanese_Type_99.jpg"
            alt="Japanese Dive Bombers search for US fleet"
            width="200"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              Japanese "Val" Dive Bombers head towards the US carriers
            </Card.Title>
          </Card.Body>
        </Card>
      </CardDeck>
      <CardDeck>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/USS_Yorktown_%28CV-5%29_during_the_Battle_of_the_Coral_Sea%2C_April_1942.jpg/220px-USS_Yorktown_%28CV-5%29_during_the_Battle_of_the_Coral_Sea%2C_April_1942.jpg"
            alt="Yorktown before battle"
            width="200"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Yorktown before the battle</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://pacificeagles.net/wp-content/uploads/2017/08/Lexington-sinking-in-Coral-Sea-678x381.jpg"
            alt="Lexington sinking"
            width="200"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Lexington abandoned and sinking</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/8/81/Zero_launching_from_a_Japanese_carrier.jpg"
            alt="Japanese Zero launching"
            width="200"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              Zeros depart from Shokaku to strike the US carriers
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/USS_Yorktown_%28CV-5%29_in_a_dry_dock_at_the_Pearl_Harbor_Naval_Shipyard%2C_29_May_1942_%2880-G-13065%29.jpg/220px-USS_Yorktown_%28CV-5%29_in_a_dry_dock_at_the_Pearl_Harbor_Naval_Shipyard%2C_29_May_1942_%2880-G-13065%29.jpg"
            alt="Yorktown undergoing repairs"
            width="200"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Yorktown undergoing repairs for Midway</Card.Title>
          </Card.Body>
        </Card>
      </CardDeck>
    </p>
    <p>
      <h3>Battle of Midway: June 4th - 7th, 1942</h3>
      <i>
        <b>
          The whole course of the war in the Pacific may hinge on the
          developments of the net two or three days.
          <br></br>-CinCPAc Command Summary of Japanese movement towards Midway,
          June 3rd
        </b>
      </i>
      <br></br>
      <br></br>
      <i>
        <b>
          Our citizens can now rejoice that a momentus victory is in the making.
          Perhaps we will be forgiven if we claim we are about midway to our
          objective
          <br></br>-Fleet Admiral Chester Nimitz
        </b>
      </i>
      <br></br>
      <br></br>
      The Battle of Midway was fought in and around the vicinity of Midway Atoll
      which is approximately 1500 miles from the Hawaiian islands. Following the
      successful Doolittle Raid on the Japanese home islands, Admiral Isoroku
      Yamamoto was convinced that the American carriers posed a large threat to
      further Japanese expansion in the Pacific. The Japanese admiralty
      considered another strike against Pearl Harbor to draw the American
      carriers out to fight. However, the risk of American land-based bombers
      proved too much of a threat for the Japanese Navy and thus Midway Atoll
      was chosen as the target. Midway Atoll at the time hosted a small military
      airfield and a submarine refueling base. Yamamoto framed the entire attack
      around deception by having escorting battleships trail the main carrier
      strike group prior to the battle. The Imperial Japanese Navy also
      supported a diversionary attack on the Aleution islands in Alaska to move
      attention away from the central Pacific. US Fleet Admiral Chester Nimitz,
      sensing that the Japanese were planning an attack somewhere in the Central
      Pacific, mobilized the cryptanalyst division which broke the Japanese
      JN-25b secure encrypted communication channel. Nimitz had determined that
      the Japanese planned a large scale attack imminent on an objective
      codenamed "AF". In order to determined "AF"'s true identity, the US
      broadcast that there was a shortage of water on Midway Atoll upon which
      the Japanese relayed to the rest of the fleet units. After the Japanese
      message "AF was short on water" was intercepted, Nimitz ordered the
      carriers USS Enterprise, USS Hornet, and USS Yorktown to Midway.
      <br></br>
      <br></br>
      The US force comprised three fleet carriers, seven heavy cruisers, fifteen
      destroyers and approximately 360 aircraft. The Japanese brought four fleet
      carriers, two battleships, two heavy cruisers, twelve destroyers and 248
      aircraft. In reserve, the Japanese also had two light carriers, five more
      battleships, and four more heavy cruisers. The Japanese attack on Midway
      commenced at 4:30 AM on June 4th, 1942 with a wave of 36 Val dive bombers
      and 36 Kate torpedo bombers. Midway Atoll picked up the force on radar and
      intercepted with six F4F Wildcats. However, the majority of the Japanese
      force landed their payloads on Midway severly, damaging the airfield and
      arms lockers. Land based bombers at Midway managed to score only
      superficial damage on the Japanese carrier fleet. With the Japanese fleet
      located, Hornet, Yorktown, and Enterprise launched a combined strike of
      117 aircraft. The group failed to locate the fleet presumably because of a
      changed course by the Japanese fleet. Many of the pilots in the strike
      group had to bail out and ditch in the water. However, following desperate
      searching, US airmen from Enterprise's VB-6 dive bomber squadron sighted
      the Japanese destroyer Arashi on the outskirts of the Japanese carrier
      battlegroup. The destroyer was returining to the main Japanese fleet after
      conducting anti-submaring warfare on the USS Nautilus. With the exact
      position of the Japanese fleet determined, the US dive and torpedo bomber
      squadrons commenced their attack. US aviators scored direct bomb hits on
      carriers Kaga, Akagi, and Soryu which caused them to sink a few hours
      later. Admiral Chuichi Nagumo, who was in charge of the carrier force, was
      forced to move his flag to the light cruiser Nagara. Hiryu was the only
      Japanese carrier that survived the initial attack, and within a few hours,
      a counterattack was launched on the US fleet.
      <br></br>
      <br></br>
      The Val and Kate bombers from Hiryu's first wave located Yorktown in the
      afternoon of June 4th. They hit the forward flight elevator and all but
      one of Yorktown's boilers. Emergency crews repaired Yorktown's engines
      quickly and by the time the second wave of Hiryu's strike group came
      across Yorktown, they thought they had found a completely new carrier. The
      second wave caused a total loss of power in the carrier and the ship
      listed 23 degrees to port. Salvage operations had begun on Yorktown
      throughout June 5th and June 6th, but she was struck by two torpedoes
      fired from the Japanese submarine I-168. On June 7th, it was determined
      that Yorktown could not be saved and she eventually sunk at 7:01 AM. Hiryu
      was sighted in the evening of June 4th by a Yorktown scout plane, and
      aircraft from Enterprise and Hornet decimated the last Japanese carrier.
      At nightfall, Admiral Raymond Spruance, who was the US commander withdrew
      his carriers away from Midway to the east. Yamamoto, with the loss of his
      fast carrier force, instead detached his battleships to search for the US
      fleet. Spruance's decision to pull the fleet away from Midway proved to be
      a prudent move since the Japanese battleship force, which included super
      battleship Yamato, was highly skilled in night attack tactics. On June
      5th, Spruance failed to regain contact with the Japanese battleship fleet
      and pulled Enterprise and Hornet away from Midway. The US submarine Tambor
      contributed to the battle by surprising the Japanese cruisers Mogami and
      Mikuma. Following the encounter, Mikuma was rendered useless to move after
      a collision with the Mogami and was eventually sunk by SBD Dauntless dive
      bombers. Mogami was able to sustain severe damage and returned back to the
      Japanese home islands for repairs. Following the Battle of Midway, the
      Japanese carrier group had been utterly destroyed. The Japanese lost all
      four fleet aircraft carriers, one heavy cruiser, and almost 248 aircraft
      destoyed. The US on the other hand lost only one fleet carrier, one
      destroyer, and 150 aircraft. The battle halted any chance of further
      Japanese expansion in the Pacific and effectively turned the tide of the
      Pacific War against the Empire. The United States managed to destroy
      approximately 2/3 of the Japanese carrier force, but the loss of the USS
      Yorktown shrunk the number of operational US aircraft carriers to just
      two. Hornet and Enterprise were now the only two US battle ready carriers
      to oppose any future Japanese moves in the Pacific.
      <br></br>
      <CardDeck>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Douglas_TBD-1_Devastators_of_VT-6_are_spotted_for_launch_aboard_USS_Enterprise_%28CV-6%29_on_4_June_1942_%2880-G-41686%29.jpg/220px-Douglas_TBD-1_Devastators_of_VT-6_are_spotted_for_launch_aboard_USS_Enterprise_%28CV-6%29_on_4_June_1942_%2880-G-41686%29.jpg"
            alt="TBD1 Devestator"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              TBD Devastator torpedo bombers on the flight deck of USS
              Enterprise.
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/USS_Yorktown_%28CV-5%29_is_hit_by_a_torpedo_on_4_June_1942.jpg/220px-USS_Yorktown_%28CV-5%29_is_hit_by_a_torpedo_on_4_June_1942.jpg"
            alt="Yorktown hit"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              Yorktown under attack from Kate torpedo bombers from Hiryu
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Japanese_aircraft_carrier_Hiryu_adrift_and_burning_on_5_June_1942_%28NH_73065%29.jpg/220px-Japanese_aircraft_carrier_Hiryu_adrift_and_burning_on_5_June_1942_%28NH_73065%29.jpg"
            alt="Hiryu burning"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              Hiryu shortly before sinking following hits from Enterprise and
              Hornet
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Japanese_heavy_cruiser_Mikuma_sinking_on_6_June_1942_%2880-G-414422%29.jpg/220px-Japanese_heavy_cruiser_Mikuma_sinking_on_6_June_1942_%2880-G-414422%29.jpg"
            alt="Mikuma"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              Mikuma sinking after attacks from dive bombers and USS Tambor
            </Card.Title>
          </Card.Body>
        </Card>
      </CardDeck>
      <CardDeck>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Midway_survivor_on_PBY.jpg/220px-Midway_survivor_on_PBY.jpg"
            alt="Catalina"
          ></Card.Img>
          <Card.Body>
            <Card.Title>A rescued US airman on Midway Atoll</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/AkagiDeckApril42.jpg/220px-AkagiDeckApril42.jpg"
            alt="Akagi"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Japanese carrier Akagi served as flagship.</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://cbsnews3.cbsistatic.com/hub/i/r/2017/06/02/7f602f2c-abae-44b3-9dd4-0b552ff67cbc/thumbnail/1200x630/d148571a7048d8f11ae09d34b30c0b30/battle-of-midway-dive-bombers-attack-japanese-ship-nara.jpg"
            alt="Japanese Dive bombers"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              Douglas SBD Dauntless dive bombers prepare to attack cruiser
              Mikuma
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://nationalinterest.org/sites/default/files/main_images/23876676272_39224239bb_b.jpg"
            alt="Starboard Mikuma"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Starboard view of Mikuma on fire</Card.Title>
          </Card.Body>
        </Card>
      </CardDeck>
    </p>
    <h2>The Solomon Islands Campaign</h2>
    <p>
      <h3>Battle of Tulagi and Gavutu-Tanambogo: August 7-9 1942</h3>
      With the momentum following the sinking of four Japanese aircraft carriers
      at Midway, the United States was eager to open up an offensive in the
      Japanese controlled South Pacific. The Japanese had plans to invade New
      Guinea and continue with the invasion of Australia and New Zealand. A
      Japanese occupation of Australia and New Zealand would cut the British and
      American trade routes and ties in the South Pacific. The United States
      launched an invasion of the Solomon Islands where the Japanese had several
      strategic airfields and naval bases (Rabaul being the primary one). The
      United States chose to invade the small islands of Tulagi and
      Gavutu-Tanambogo to establish a beachead near Florida and Guadalcanal
      islands. From Tulagi and Gavutu-Tanambogo, the Americans could turn their
      attention to the much larger islands in the Solomon chain and retake them
      one by one. Douglas SBD Dauntless dive bombers from the new aircraft
      carrier USS Wasp destroyed Japanese shore facilities and anti-aircraft
      nests while Grumman F4F Wildcats strafed Japanese fighters and sea planes
      that were anchored in the harbors. The Americans also had naval
      bombardment with the cruiser USS San Juan and destroyers USS Monseen and
      USS Buchanan. US Marines soon landed on Tulagi at 8:00 AM on August 7th
      and established a beachead unopposed and began marching to the strategic
      outpost of Hill 281. By nightfall, the Marines had captured almost 2/5ths
      of Tulagi without encountering too much Japanese resistance. However, the
      Japanese counterattacked at night and made slight progress by pushing the
      Marines back. The resistance on Tulagi could not destroy the Americans
      completely and by the afternoon of August 8th, Tulagi was confidently in
      American hands.
      <br></br>
      <br></br>
      The Marines also landed on Gavutu and Tanambogo islands at noon on August
      7th. The occupation followed a similar cadence to the occupation of Tulagi
      where US Marines made major progress but had to stop at nightfall. The
      Japanese attacked in the night but failed to destroy the majoritry of the
      American force. Constant naval bombardment also allowed the islets to be
      captured by the end of August 9th. The United States lost 122 men
      occupying the islands while the Japanese lost 863 men. After establishing
      control of Tulagi and Gavutu-Tanambogo, General Alexander Vandgrift landed
      11,000 Marines on the island of Guadalcanal. The Americans captured the
      strategic Japanese airfield at the Lunga River and renamed it Henderson
      Field. This airfield would become extremely important for control of
      Guadalcanal and the rest of the Solomon islands campaign.
      <br></br>
      <CardDeck>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/TulagiBattle1942.gif/220px-TulagiBattle1942.gif"
            alt="Aerial of Tulagi"
            width="200"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              Aerial photo of the US Marine advance to Hill 281 on Tulagi
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/TulagiRupertus.jpg/220px-TulagiRupertus.jpg"
            alt="Rupertus superivising Tulagi assault"
            width="200"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              General Rupertus observes the landings on Tulagi
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/3/3d/TulagiBeachBlue.jpg"
            alt="US Marines on Tulagi"
            width="200"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Marines wade ashore on Tulagi</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/TulagiMarineOfficers.jpg/220px-TulagiMarineOfficers.jpg"
            alt="US Marines on Tulagi"
            width="200"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              US Marine officers after the successful capture of Tulagi
            </Card.Title>
          </Card.Body>
        </Card>
      </CardDeck>
    </p>
    <p>
      <h3>First Battle of Savo Island: August 8-9 1942</h3>
      As the United States Marine landing force invaded Tulagi and Guadalcanal,
      a joint US and Australian naval force under Rear Admiral Richmond Turner
      and Rear Admiral Victor Crutchley comprising of 6 heavy cruisers, 2 light
      cruisers and 15 destroyers sailed into the waters off of Savo Island to
      the north of Guadalcanal and south of Tulagi and Florida Island for
      support. The force was split into a Southern Group of cruisers HMAS
      Australia, HMAS Canberra, USS Chicago with accompanying destroyers USS
      Bagley and USS Patterson and a Northern Group composed of cruisers USS
      Vincennes, USS Quincy, and USS Astoria with accompanying destroyers USS
      Helm and USS Wilson. An Eastern Group acting as a picket consisted of
      cruisers USS San Juan and HMAS Hobart with destroyers USS Monssen and USS
      Buchanan. As the landings progressed throughout the day on August 7th and
      8th, the Allied naval force provided aerial bombardment and supplies to
      the Marines on the ground.
      <br></br>
      <br></br>
      On the night of August 8th, Japanese Vice Admiral Mikawa Gunichi sailed a
      smaller Japanese naval force of 5 heavy cruisers, 2 light cruisers and 1
      destroyer from bases in Rabaul, New Britain and New Ireland down New
      Georgia Sound which eventually received the nickname "The Slot". The force
      consisted of heavy cruisers Chokai, Aoba, Furutaka, Kako, and Kinugasa,
      light cruisers Tenryu and Yubai and destroyer Yunagi. Around midnight on
      August 9th, the Japanese Force sailed past the radar picket of USS Blue
      and USS Ralph Talbot at the head of the Allied naval force undetected.
      Japanese naval operations at night were far superior to their Allied
      counterparts, and as a result, the Japanese force surprised the Southern
      Group at 1:31 AM on August 9th and opened fire. Salvos of torpedos were
      launched into the inky darkness and Japanese launched flares illuminated
      the entire Southern group. The first ships hit with Japanese heavy cruiser
      fire was HMAS Canberra and USS Chicago. Canberra began listing to
      starboard and had suffered total power loss and flooding. Chicago suffered
      two torpedo hits and fled west to escape the Japanese force. Having sent
      the Southern group into disarray, the Japanese turned north and attacked
      the Northern cruiser force.
      <br></br>
      <br></br>
      At 1:50 AM, the Japanese turned on their search lights and launched flares
      to reveal the unsuspecting Northern force. The USS Astoria was the first
      cruiser hit with combined fire from Chokai, Aoba, Kinugasa, and Kako. The
      bombardment had set the US cruiser on fire and had damaged her fire
      control systems. Astoria managed to return fire and knocked out one of
      Chokai's forward turrets. Hearing the bombardment, the USS Quincy was
      suddenly caught in a crossfire from Aoba, Furutaka, and Tenryu at 2:10 AM
      causing her to sink at 2:38 AM. The USS Vincennes sighted the Japanese
      flares to the South and began to turn North but was pursued by Japanese
      cruiser Kako and Furutaka. As Vincennes moved closer to 25 knots, she was
      struck by torpedos which irreparably damaged her boiler room and steering
      and was hit with a total of 74 artillery shells. Vincennes sank at around
      2:50 AM.
      <br></br>
      <br></br>
      With considerable damage done to the Northern and Southern groups as well
      as fear of an American carrier attack in the morning, Admial Mikawa
      ordered the Japanese forces to turn around and head back up New Georgia
      Sound. The remaining US forces had managed to seek refuge on the Northern
      side of Savo Island. All in all, the American-Australian force had lost
      1,077 men and 4 heavy cruisers which included HMAS Canberra, USS
      Vincennes, USS Quincy, and USS Astoria. The Japanese forces suffered only
      129 deaths and 2 heavy cruisers moderately damaged. Although the Japanese
      had done considerable damage to the US cruiser fleet, the tranports
      carrying reinforcement Marines were not affected and the US was able to
      resupply the forces on Guadalcanal.
      <br></br>
      <CardDeck>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Battle_of_Savo_Island_map_-_disposition_of_forces.png/220px-Battle_of_Savo_Island_map_-_disposition_of_forces.png"
            alt="Savo Island Battle Map"
            width="200"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              Positioning of ships on the night of August 8th
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/View_from_the_Japanese_cruiser_Chokai_during_the_Battle_of_Savo_Island_on_9_August_1942.jpg/220px-View_from_the_Japanese_cruiser_Chokai_during_the_Battle_of_Savo_Island_on_9_August_1942.jpg"
            alt="Chokai"
            width="200"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              Chokai illuminates the Southern Force with flares
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Japanese_cruiser_Yubari_shines_searchlights_during_the_Battle_of_Savo_Island_on_9_August_1942.jpg/220px-Japanese_cruiser_Yubari_shines_searchlights_during_the_Battle_of_Savo_Island_on_9_August_1942.jpg"
            alt="Yubari"
            width="200"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              Yubari illuminates the Northern Force with flares
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/HMAS_Canberra_%28D33%29_underway_off_Tulagi%2C_circa_7_August_1942.jpg/220px-HMAS_Canberra_%28D33%29_underway_off_Tulagi%2C_circa_7_August_1942.jpg"
            alt="Canberra Protects Transports"
            width="200"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              HMAS Canberra protects Allied transports near Tulagi
            </Card.Title>
          </Card.Body>
        </Card>
      </CardDeck>
      <CardDeck>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Sinking_HMAS_Canberra_%28D33%29_with_US_destroyers_on_9_August_1942.jpg/220px-Sinking_HMAS_Canberra_%28D33%29_with_US_destroyers_on_9_August_1942.jpg"
            alt="Canberra Scuttled"
            width="200"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              USS Blue evacuates the crew from the burning HMAS Canberra
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/USS_Quincy_%28CA-39%29_under_fire_during_the_Battle_of_Savo_Island_on_9_August_1942_%28NH_50346%29.jpg/300px-USS_Quincy_%28CA-39%29_under_fire_during_the_Battle_of_Savo_Island_on_9_August_1942_%28NH_50346%29.jpg"
            alt="Quincy sinking"
            width="200"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              USS Quincy on fire and sinking from Japanese torpedoes and naval
              artillery
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://i.pinimg.com/originals/83/5d/6f/835d6f042dc8c14698ed77a9b166f762.jpg"
            alt="Chokai"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Chokai served as Mikawa's flagship</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/2/25/SavoMikawaApproach.jpg"
            alt="The Slot"
            width="200"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              Admiral Mikawa's route from New Ireland and New Britain down New
              Georgia Sound nicknamed "The Slot"
            </Card.Title>
          </Card.Body>
        </Card>
      </CardDeck>
    </p>
    <p>
      <h3>Battle of the Eastern Solomons: August 24-25 1942</h3>
      Having destroyed a majority of the US cruiser force responsible for
      protecting the Guadalcanal Marine invasion force, the Japanese sensed that
      they had the initiative and realized that they may be able to retake
      Guadalcanal. The Japanese mobilize a carrier task force to escort troop
      transports from their bases in Rabaul (New Britain and New Ireland) and
      Truk Lagoon down New Georgia Sound to retake Guadalcanal. The other
      mission for the Japanese task force is to sink the US carrier group
      comprising of USS Enterprise, USS Wasp, and USS Saratoga providing air
      support to the Marine landing force on Guadalcanal from nearby Santa
      Isabel Island.
      <br></br>
      <br></br>
      The Japanese organize fleet carriers Shokaku and Zuikaku, light carrier
      Ryujo as well as battleships Hiei and Kirishima to form the vanguard of
      their task force. They also take heavy cruisers Atago, Maya, Takao, Myoko,
      Haguro, Kumano, Suzuya, Chikuma, and Tone. The carrier/battleship force is
      under the command of Vice Admiral Chuichi Nagumo while the cruiser force
      is under the command of Nobutake Kondo. The US carrier force is seemingly
      unaware of the Japanese task force and orders USS Wasp to head south to
      the US base at Espiritu Santo to refuel. Therefore, the only carriers now
      defending Guadalcanal are USS Enterprise and USS Saratoga as well as fast
      battleship USS North Carolina. The US carrier force was under the command
      of Admiral Frank Jack Fletcher.
      <br></br>
      <br></br>
      On August 24th, 1942, USS Enterprise and USS Saratoga launched an initial
      strike of SBD Dauntless dive bombers and F4F Wildcat fighters to locate
      the nearby Japanese fleet. A PBY Catalina scout plane had spotted the
      light carrier Ryujo and heavy cruiser Tone at 9:35AM near Guadalcanal. The
      Dauntless dive bombers and Wildcats encountered Ryujo and heavily damaged
      her with three to five bomb hits causing her to sink later in the day.
      However, the US strike group that hit Ryujo did not discover the vanguard
      force of carriers Shokaku and Zuikaku. Getting word of the attack on
      Ryujo, Nagumo ordered a large strike composing of Val dive bombers, Kate
      torpedo planes and Zero fighters from Shokaku and Zuikaku to strike the
      American fleet.
      <br></br>
      <br></br>
      At 4:00 PM, the sailors on Enterprise and Saratoga have no idea that the
      Japanese air strike from Shokaku and Zuikaku is only 88 miles away.
      American radar at this stage in the war is still extremely primitive and
      has difficulties detecting targets inside of 90 to 50 miles. With faulty
      detection from their radars, Enterprise and Saratoga went to general
      quarters with every anti-aircraft gun looking for a large storm of
      Japanese planes. At 4:19 PM, the American Wildcat combat air patrol
      engaged the first two squadrons of Val dive bombers escorted by Zero
      fighters. The F4F Wildcat's down 29 Japanese planes before they can make
      it to the US carriers. Enterprise and Saratoga immediately launched every
      available plane in their air wing to inderdict the oncoming Japanese
      strike. At 4:29 PM, the US carriers and their escorts began shooting
      anti-aircraft fire into the Japanese strike force. They initially started
      attacking both Saratoga and Enterprise but shifted rapidly to attacking
      Enterprise as it was the closest carrier to the Japanese strike package.
      The first Val dive bomber missed his target and was promptly shot out of
      the sky by a 20mm Oerlikon gun battery on Enterprise. Incredibly the bombs
      dropped from the first nine Val dive bombers that attacked Enterprise all
      missed due to evasive maneuvering and effective anti-aircraft fire from
      battleship North Carolina.
      <br></br>
      <br></br>
      Inveitably however, a Val piloted by Petty Officer Kiyoto Furuta hit
      Enterprise with a 550 pound armor piercing bomb near the aft elevator at
      4:44 PM. The bomb crashed through five decks before exploding near the
      waterline which flooded Enterprise's aft section and killed 35 men.
      Enterprise developed a list to port but did not suffer any major breaches
      of hull integrity. Thirty seconds later, another Val piloted by Petty
      Officer Tamotsu Akimoto landed another bomb 15 feet away from the first.
      The bomb ignited a secondary explosion from the 5 inch anti aircraft gun
      powder casings which killed an additional 35 sailors and started a new
      fire near the flight and hangar decks. Many of the gun crews that had been
      killed as a result of the second explosion had been discovered after the
      battle frozen in place with some getting ready to load a shell into the
      gun or aiming it to the sky. Two minutes after the second bomb hit, a
      third and final Val piloted by Petter Officer Kazumi Horie hit Enterprise
      forward of the midships elevator. A ten foot hole was created near the
      elevator which put it out of comission as well as knocking out the central
      steering and propulsion system. The rudder of Enterprise became locked in
      the starboard configuration and thus the carrier began to circle in a
      right hand turn. Following the third bomb hit, the Val dive bombers
      switched their attack to USS North Carolina. Seven Vals made dives on
      battleship North Carolina, but all of their bombs missed and all seven
      were shot down by anti aircraft fire.
      <br></br>
      <br></br>
      With Enterprise taking three bomb hits, the rest of the Japanese fighters
      disappeared into the clouds to head back to Shokaku and Zuikaku. Damage
      control parties on Enterprise amazingly managed to fix the steering
      mechanism and control the raging fires in only one hour. At 5:46 PM, the
      Enterprise and Saratoga manage to leave the battle area extremely wounded.
      As a second wave of Japanese planes arrived over the expected position of
      the American carrier group, they found nothing (due to the American
      carrier group changing their course) and were forced to return back to the
      Japanese carriers. Unfortunately, the US strike group had failed to locate
      Nagumo's vanguard force and was forced to land at Henderson field on
      Guadalcanal. USS Enterprise and her escorts sailed into Pearl Harbor
      following the battle for an extensive repair from the damage she sustained
      to her aft and midships elevators.
      <br></br>
      <br></br>
      The Battle of the Eastern Solomons is considered a tactical and strategic
      victory for the United States despite USS Enterprise sustaining heavy
      damage. The Japanese lost the light carrier Ryujo and 61 veteran naval
      pilots from their carrier force. The US on the other hand lost no aircraft
      carriers (albeit Enterprise was sidelined for close to a month) and only
      seven pilots. The US fleet had also managed to stop the Japanese carrier
      task force sent to land troop transports on Guadalcanal which kept the
      Marine invasion force intact and Henderson Field in American hands.
      Nagumo's vanguard force and Kondo's cruisers turned around and headed back
      to Rabaul and Truk staving off the reinforcement of the Japanese garrison
      on Guadalcanal.
      <br></br>
      <CardDeck>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/USS_Enterprise_%28CV-6%29_under_attack_and_burning_during_the_Battle_of_the_Eastern_Solomons_on_24_August_1942_%28NH_97778%29.jpg/1280px-USS_Enterprise_%28CV-6%29_under_attack_and_burning_during_the_Battle_of_the_Eastern_Solomons_on_24_August_1942_%28NH_97778%29.jpg"
            alt="Enterprise Eastern Solomons"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              Enterprise maneuvering under air attack from Japanese Val dive
              bombers
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/USS_Wasp_%28CV-7%29%2C_USS_Saratoga_%28CV-3%29_and_USS_Enterprise_%28CV-6%29_operating_in_the_Pacific_south_of_Guadalcanal_on_12_August_1942.jpg/220px-USS_Wasp_%28CV-7%29%2C_USS_Saratoga_%28CV-3%29_and_USS_Enterprise_%28CV-6%29_operating_in_the_Pacific_south_of_Guadalcanal_on_12_August_1942.jpg"
            alt="Enterprise Eastern Solomons"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              Enterprise, Wasp, and Saratoga operating near Guadalcanal before
              Eastern Solomons
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Aerial_view_of_the_immobile_Japanese_carrier_Ryujo_with_two_destroyers_during_the_Battle_of_the_Eastern_Solomons%2C_24_August_1942_%2880-G-88018%29.jpg/220px-Aerial_view_of_the_immobile_Japanese_carrier_Ryujo_with_two_destroyers_during_the_Battle_of_the_Eastern_Solomons%2C_24_August_1942_%2880-G-88018%29.jpg"
            alt="Enterprise Eastern Solomons"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              Ryujo with escorting destroyers under air attack from Enterprise
              and Saratoga dive bombers
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Japanese_Aichi_D3A_dive_bomber_shot_over_USS_Enterprise_%28CV-6%29_on_24_August_1942_%2880-G-31349%29.jpg/220px-Japanese_Aichi_D3A_dive_bomber_shot_over_USS_Enterprise_%28CV-6%29_on_24_August_1942_%2880-G-31349%29.jpg"
            alt="Enterprise Eastern Solomons"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              A Val dive bomber shot down by anti aircraft fire directly over
              USS Enterprise
            </Card.Title>
          </Card.Body>
        </Card>
      </CardDeck>
      <CardDeck>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Japanese_bomb_hits_USS_Enterprise_%28CV-6%29_flight_deck_during_Battle_of_the_Eastern_Solomons%2C_24_August_1942_%2880-G-17489%29.jpg/220px-Japanese_bomb_hits_USS_Enterprise_%28CV-6%29_flight_deck_during_Battle_of_the_Eastern_Solomons%2C_24_August_1942_%2880-G-17489%29.jpg"
            alt="Enterprise Eastern Solomons"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              The third bomb dropped on Enterprise explodes near the midships
              elevator
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Damaged_127mm_gun_on_USS_Enterprise_%28CV-6%29%2C_circa_in_August_1942.jpg/220px-Damaged_127mm_gun_on_USS_Enterprise_%28CV-6%29%2C_circa_in_August_1942.jpg"
            alt="Enterprise Eastern Solomons"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              The burnt 5 inch anti aircraft gun on Enterprise which was taken
              out by the second Val bomb hit
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://www.history.navy.mil/content/history/nhhc/research/histories/ship-histories/danfs/n/north-carolina-iii/jcr%3Acontent/body/media_asset/image.img.jpg/1561995906850.jpg"
            alt="Enterprise Eastern Solomons"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              USS North Carolina which supported Enterprise during the battle
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Aichi_D3A2.jpg"
            alt="Enterprise Eastern Solomons"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Aichi D3A Val Dive Bomber</Card.Title>
          </Card.Body>
        </Card>
      </CardDeck>
    </p>
    <p>
      <h3>
        Battle of Cape Esperance (Second Battle of Savo Island): October 11-12
        1942
      </h3>
      As the American carriers left the battle area of Eastern Solomons and the
      Japanese carrier task force was in full retreat back to Truk and Rabaul,
      there was little major naval presence around the Solomon islands. However,
      the Japanese still maintained naval supremacy at night near Savo Island
      and Guadalcanal. The Japanese also planned a second invasion of
      Guadalcanal to occur on October 20th with the renewed strength of their
      carrier task force. As a preliminary run, Vice Admiral Gunichi Mikawa (who
      led the cruiser force in the First Battle of Savo Island) planned to
      deliver 700 soldiers, four howitzers, two field guns, and one anti
      aircraft gun to Guadalcanal from Rabaul.
      <br></br>
      <br></br>
      The force doing the preliminary run would consist of heavy cruisers Aoba,
      Kinugasa, and Furutaka as well as destroyers Fubuki, Hatsuyuki, Asagumo,
      Natsugumo, Yamagumo, Shirayuki, Murakumo, and Akizuki, and seaplane
      carriers Chitose and Nisshin. Mikawa expected no US resistance near Savo
      Island since no US navy warships had yet to inderdict the so called "Tokyo
      Express" missions to Guadalcanl. However, the United States had stationed
      a cruiser and destroyer force near Cape Esperance which is the
      northernmost point on Guadalcanal. Led by Rear Admiral Norman Scott, the
      force consisted of cruisers Helena, Salt Lake City, Boise, and San
      Francisco as well as destroyers Farenholt, Duncan, Buchanan, McCalla, and
      Laffey.
      <br></br>
      <br></br>
      As the Japanese reinforcement force sailed down "The Slot", US
      reconaissance aircraft sighted the cruisers and destroyers which allowed
      Scott to have advanced warning of the approaching Japanese ships. The US
      cruisers and destroyers had formed a battle line just ahead of Cape
      Esperance where they would cut the Japanese off and destroy them. Equipped
      with radar, the US cruisers were now able to see the Japanese force
      incoming. Upon nearing Cape Esperance, the Japanese ships began to take
      damage from the US warships. Aoba was hit with 40 shells from Helena, Salt
      Lake City, San Francisco, Farenholt, and Laffey which knocked out her gun
      directors and two main gun turrets. Aoba continuing to receive hits turned
      to starboard which exposed Furutaka to US cruiser fire. The shells hit
      Furutaka's torpedo tubes that ignited a large fire which crippled the
      cruiser's engines. Moments later, destroyer Fubuki was hit with sustained
      American shells and sank. As Furutaka withdrew, Kinugasa managed to launch
      a salvo of torpedos which nearly hit cruiser Boise and fire from
      Kinugasa's main battery exploded in Boise's ammunition magazine which
      killed about 100 sailors. Ironically, a larger explosion was prevented on
      Boise when seawater entering the magazine quenched the fire. Noticing that
      the Japanese could not make progress around the American cruisers, they
      retreated northward.
      <br></br>
      <br></br>
      Following the shootout, cruiser Furutaka had sunk as well as destroyer
      Fubuki. US dive bombers later the next day found Japanese destroyers
      attempting to help Furutaka. In the dive bomber attack, the Japanese also
      lost destroyers Natsugumo and Murakumo. The Americans had beaten back the
      initial wave of Japanese attempts to land troops on Guadalcanal in October
      and proved that US forces could still compete in night naval action near
      Guadalcanal.
      <br></br>
      <CardDeck>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/AobaEsperance.jpg/300px-AobaEsperance.jpg"
            alt="Enterprise Eastern Solomons"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              Aoba disembarking dead and wounded sailors after the Battle of
              Cape Esperance
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/USS_Boise_%28CL-47%29_at_anchor%2C_circa_in_late_August_1942_%2880-G-K-558%29.jpg/220px-USS_Boise_%28CL-47%29_at_anchor%2C_circa_in_late_August_1942_%2880-G-K-558%29.jpg"
            alt="Enterprise Eastern Solomons"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Boise at Espiritu Santo in August 1942</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/USS_Boise_%28CL-47%29_Battle_of_Cape_Esperance_scoreboard%2C_in_November_1942_%2880-G-36299%29.jpg/220px-USS_Boise_%28CL-47%29_Battle_of_Cape_Esperance_scoreboard%2C_in_November_1942_%2880-G-36299%29.jpg"
            alt="Enterprise Eastern Solomons"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              A sailor points to the scoreboard on USS Boise in November 1942.
              Boise claims to have killed a Mogami class cruiser and Sendai
              class cruiser neither of which were present at Cape Esperance
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Japanese_cruiser_Furutaka.jpg/300px-Japanese_cruiser_Furutaka.jpg"
            alt="Enterprise Eastern Solomons"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              Heavy cruiser Furutaka which was sunk in the battle
            </Card.Title>
          </Card.Body>
        </Card>
      </CardDeck>
    </p>
    <p>
      <h3>Batle of the Santa Cruz Islands: October 25-27 1942</h3>
    </p>
  </Layout>
)
