import React from "react"
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"
import Layout from "../components/Layout"

import "../styles/Chess.css"

export default () => (
  <Layout>
    <h2>Chess</h2>
    <p>
      Welcome to the chess page of my website. This page is meant to highlight
      my favorite chess games throughout the years.
    </p>
    <h2>1972 World Chess Championship</h2>
    <p>
      <h3>Background</h3>
      <i>
        <b>
          If money is the question, here it is. Now come out and play, chicken!
          <br></br>-Jim Slater
        </b>
      </i>
      <br></br>
      <br></br>
      The 1972 World Chess Championship was played between World Chess Champion
      Boris Vasiljevic Spassky of the Soviet Union and Challenger Robert James
      Fischer of the United States. It was held in Reykjavik, Iceland during the
      height of the Cold War. Previously, Spassky had won the Candidates
      tournament of 1966 and 1969 and faced World Champion Tigran Petrosian
      losing to him in 1966 by a margin of 12&frac12; to 11&frac12; and beating
      him in 1969 by a margin of 12&frac12; to 10&frac12;. Spassky was known as
      a player that had a universal style, but could press the initiative when
      needed. Previous to the 1972 World Chess Championship, most of the World
      Chess Champions had originated from the Soviet Union. These included
      players such as Mikhail Tal, Mikhail Botvinik, and Tigran Petrosian.
      <br></br>
      <br></br>
      Bobby Fischer's route to the 1972 World Chess Championship started with a
      demolition of the field at the 1970 Palma de Mallorca Interzonal
      Tournament. This tournament's format was a round-robin style where twenty
      four of the best grandmasters played each other. The top six players of
      the Interzonal tournament qualified to the 1971 Candidates match and were
      Fischer (18&frac12;), Bent Larsen of Denmark (15), Efim Geller of the
      Soviet Union (15), Robert Hubner of West Germany (15), Mark Taimanov of
      the Soviet Union (14), and Wolfgang Uhlmann of East Germany (14).
      Petrosian, who was the loser of the 1969 World Chess Championship, and
      Victor Korchnoi, as the runner up of the previous Candidates tournament
      were also included in the 1971 Candidates Tournament. In the Candidates,
      Fischer destroyed Mark Taimanov 6 - 0 in the quarterfinals and destroyed
      Bent Larsen in the semifinals 6 - 0 (happened in my hometown of Denver).
      Fischer then faced Petrosian in the Final in Buenos Aires playing a nine
      game match which Fischer won by a margin of 6&frac12; to 2&frac12;. An
      interesting tidbit about the final is that Petrosian ended Bobby Fischer's
      twenty game win streak following game 2. After winning the Candidates,
      Fischer was given the right to challenge Spassky for the world title.
      <br></br>
      <br></br>
      The Soviets proposed four cities to host the match which included
      Reykjavik, Amsterdam, Dortmund, and Paris. Fischer declined all the
      options due to the low prize fund alloted for the players. Fischer instead
      wanted to play in Buenos Aires, Sarajevo or Belgrade. Fischer declined
      also in part to his mistrust of the Soviets and wanted Spassky to come to
      him across the Atlantic. Dr. Max Euwe, who was president of the chess
      governing body, FIDE, declared that the match will be held for twelve
      games in Belgrade and then twelve games in Reykjavik. Fischer and Spassky
      both hated Euwe's idea because it meant that the world champion could not
      dictate the terms and Fischer may not be able to get Spassky out of his
      comfort zone. Euwe gave an ultimatum to Fischer to either play the
      proposed match in both Belgrade and Reykjavik or that the Championship
      match will be played between Spassky and Petrosian in Moscow. Fischer
      reluctantly agreed but stipulated that he wanted more money. As a result,
      the organizers in Belgrade backed out and Reykjavik was chosen to host all
      twenty four games.
      <br></br>
      <br></br>
      One day before the Match of the Century was supposed to take place,
      Fischer refused to fly from New York to Reykjavik for monetary reasons and
      thus the match was postponed by an additional two days. Jim Slater, who
      was a British investor, offered to double the prize fund of the tournament
      to $250,000. Former US Secretary of State, Henry Kissinger also pleaded
      with Fischer to play Spassky in Reykjavik. Eventually, Fischer flew to
      Reykjavik but the match was still postponed because Spassky demanded that
      Fischer apologize to FIDE for hijacking the terms of the match. Fischer
      apologized publicly to Spassky and the match started on July 11th, 1972.
      <br></br>
      <br></br>
      <CardDeck>
        <Card>
          <Card.Img
            height="300"
            src="https://www.picamon.com/wp-content/uploads/2014/09/Bobby-fischer-2.jpg"
            alt="Fischer"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              Robert James Fischer, World Chess Championship Challenger, USA
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://d53j7mnhlzrdg.cloudfront.net/series/best-games-of-boris-spassky.jpg"
            alt="Spassky"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              Boris Vasiljevic Spassky, World Chess Defending Champion, USSR
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://i.pinimg.com/originals/40/bc/0a/40bc0ad76f1a7503fff03f43dbec3d7c.jpg"
            alt="Petrosian"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              Tigran Petrosian, Former World Chess Champion, USSR
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://www.chesshistory.com/winter/pics/cn5198_fischer.jpg"
            alt="Newspaper"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              Newspaper headline indicating the increase of prize fund money.
            </Card.Title>
          </Card.Body>
        </Card>
      </CardDeck>
      <br></br>
      <br></br>
      <h3>
        Game 1: Nimzo-Indian Defense, Normal Variation. Gligoric System,
        Bernstein Defense (E56)
      </h3>
      <b>
        Move Order: 1.d4 Nf6 2.c4 e6 3.Nf3 d5 4.Nc3 Bb4 5.e3 0-0 6.Bd3 c5 7.0-0
        Nc6 8.a3 Ba5 9.Ne2 dxc4 10.Bxc4 Bb6 11.dxc5 Qxd1 12.Rxd1 Bxc5 13.b4 Be7
        14.Bb2 Bd7 15.Rac1 Rfd8 16.Ned4 Nxd4 17.Nxd4 Ba4 18.Bb3 Bxb3 19.Nxb3
        Rxd1+ 20.Rxd1 Rc8 21.Kf1 Kf8 22.Ke2 Ne4 23.Rc1 Rxc1 24.Bxc1 f6 25.Na5
        Nd6 26.Kd3 Bd8 27.Nc4 Bc7 28.Nxd6 Bxd6 29.b5 Bxh2 30.g3 h5 31.Ke2 h4
        32.Kf3 Ke7 33.Kg2 hxg3 34.fxg3 Bxg3 35.Kxg3 Kd6 36.a4 Kd5 37.Ba3 Ke4
        38.Bc5 a6 39.b6 f5 40.Kh4 f4 41.exf4 Kxf4 42.Kh5 Kf5 43.Be3 Ke4 44.Bf2
        Kf5 45.Bh4 e5 46.Bg5 e4 47.Be3 Kf6 48.Kg4 Ke5 49.Kg5 Kd5 50.Kf5 a5
        51.Bf2 g5 52.Kxg5 Kc4 53.Kf5 Kb4 54.Kxe4 Kxa4 55.Kd5 Kb5 56.Kd6 1 - 0
      </b>
      <br></br>
      <b>
        <a
          href="https://www.chessgames.com/perl/chessgame?gid=1044722"
          target="_blank"
          rel="noopener noreferrer"
        >
          Game Link
        </a>
      </b>
      <br></br>
      <br></br>
      On the evening of July 11th, 1972, Boris Spassky arrived at the playing
      hall with Bobby Fischer's whereabouts unknown. The arbiter of the match,
      German Grandmaster Lothar Schmid started the clocks and Spassky with the
      white pieces played d4. After nine minutes disappear on Fischer's clock,
      Fischer arrive on stage and plays Nf6. Following c4 and e6, Spassky avoids
      the Nimzo-Indian defense initially by playing Nf3 and asking Fischer
      whether to go for a Queen's Indian setup. Fischer ignores this move and
      plays d5 transposing into the Queen's gambit declined. Spassky then plays
      Nc3 and then Bb4 transposing into the Nimzo-Indian Defense. Spassky plays
      e3 as a way to avoid going into an aggressive line similar to a game
      played between Petrosian and Spassky in the previous Championship match.
      Fischer castles on move five to get his king to safety and Spassky plays
      Bd3. Fischer strikes in the center with c5 following up with Nc6. Spassky
      counters with castles (O-O) and then a3 to challenge Fischer's dark
      squared Bishop.
      <br></br>
      <br></br>
      At this point, Fischer can choose either to capture on d4 with his c5 pawn
      or capture the knight on c3 with the dark squared bishop on b4. However,
      Fischer backs off and plays Ba5 which Spassky did not expect. After a long
      think, Spassky plays Ne2 which is a move from a previous game between
      Spassky and GM Nikolai Krogius. Fischer immediately replies with dxc4
      followed by Spassky's bishop capturing on c4 (Bxc4). Fischer moves his
      darked squared Bishop back to b6 to defend the c5 pawn (Bb6). Spassky
      captures the pawn on c5 (dxc5) with his D pawn and in the game between
      Krogius and Spassky, Bxc5 was played but instead Fischer, noticing that
      Spassky's queen is exposed, plays Qxd1 for a queen trade. Spassky
      recaptures with Rxd1 and then Fischer with Bxc5. By move twelve, both
      queens are off the board as well as the e and d pawns for both sides.
      Spassky reapplies pressure with b4 which forces Fischer's dark squared
      bishop back to e7 (Be7). Spassky fianchettoes to b2 with his light squared
      bishop which applies pressure on Fischer's Kingside (Bb2). Fischer plays a
      nice move with his light squared bishop to d7 (Bd7) which allows Fischer
      to gain a tempo on Spassky's rook when his knight on c6 moves eventually.
      <br></br>
      <br></br>
      Spassky moves Rac1 which is met with Rfd8. Ned4 is played by Spassky and
      Fischer exchanges knights with Nxd4 and Nxd4 by Spassky. Fischer now gains
      a tempo on the rook with Ba4. Spassky stops this with Bb3. Fischer at this
      point had an option to capture the knight on d4 but this would lead into
      an endgame where Spassky would end up with the bishop pair compared to
      Fischer with a bishop and a knight. Instead Fischer captures Spassky's
      light squared bishop with Bxb3 to which Spassky replies with Nxb3. With an
      opening on the D file created by Spassky's Nxb3, Fischer plays Rxd1+
      (captures with check) followed by Rxd1 by Spassky (exchanging rooks).
      Fischer then grabs ahold of the C file with Rc8. At this point in the
      game, the material is equal on the board, but Fischer's remaining rook is
      in fact more impressive than Spassky's remaining rook because of Fischer's
      dark squared bishop controlling both d6 and d8 while his knight controlls
      d7. Fischer can create a rook lift to c7 at any time. Spassky improves the
      position of his King with Kf1 and Fischer replies with Kf8. Spassky moves
      Ke2 and Fischer reactivates his knight with Ne4. Spassky challenges
      Fischer's rook wih Rc1 which leads to a trade of rooks. Fischer plays Rxc1
      followed by Spassky's Bxc1.
      <br></br>
      <br></br>
      Fischer now pushes f6 presumably to grab more space on the Kingside and
      Spassky attacks Fischer's Queenside with Na5. Nd6 is played by Fischer to
      protect the b7 pawn. Spassky improves the King's position once again with
      Kd3 and Fischer forces the knight on a5 to move away with Bd8. Nc4 is
      played by Spassky to exchange knights and Fischer protects with Bc7. The
      knights are exchanged with Nxd6, Bxd6 and now Spassky advances to b6
      moving his pawns on the Queenside to light squares which can't be touched
      by Fischer's dark squared bishop.
      <br></br>
      <br></br>
      At this point in the game, the material remains completely even and it
      seems that the game will proceed into a drawn endgame, but Fischer plays
      one of the biggest blunders in his entire chess career and possibly in the
      history of the World Chess Championship. Fischer plays Bxh2 which blunders
      and traps the dark squared bishop. At this moment, everybody in the
      playing hall audience gasped when this move was played. Spassky correctly
      traps the bishop with g3. Fischer, seemingly oblivious to his blunder
      continues with h5 and Spassky completely locks down Fischers bishop by
      moving Ke2. Fischer pushes h4 followed by Spassky's Kf3. Fischer finally
      realized that his bishop was trapped and that he might have miscalculated.
      Fischer moves Ke7 to improve his king and Spassky closes on Fischer's
      trapped bishop with Kg2. Fischer captures on g3 with hxg3 followed with
      Spassky's fxg3. Fischer recaptures with Bxg3 and then Kxg3 followed by
      Fischer's Kd6 making Fischer's king active on the Queenside.
      <br></br>
      <br></br>
      Spassky locks down his Queenside pawns with a4 and Fischer moves Kd5. At
      this point, the question of the match really is if Fischer's two extra
      pawns on the Kingside are compensation for Spassky's extra piece. Spassky
      moves Ba3 which controlls all dark sqaures on the Queenside. Fischer moves
      Ke4 to attack white's e3 pawn and Spassky defends with Bc5. Fischer pushes
      a6 to break open Spassky's connected pawns on the Queenside. Spassky
      closes the position with b6 and Fischer pushes f5. Spassky moves Kh4 to
      get his king closer to Fischer's pawns and Fischer advances f4 challenging
      white's e3 pawn. At this point, the game was adjourned since the fourty
      move time control had been reached. Spassky sealed exf4 and Fischer the
      next day played Kxf4 followed by Spassky's Kh5. Kh5 is a winning idea by
      white because Spassky's king will now start marching towards Fischer's
      Queenside to gobble up all of the pawns. Spassky's bishop will protect the
      b6 pawn which is the winning pawn. Fischer has to prevent Spassky's king
      walk by playing Kf5 which is met with Be3 and then Ke4 attacking the
      bishop. Spassky gets his bishop out of the way with Bf2 and then Kf5 by
      Fischer. Spassky now prevents Fischer's king from having any effect on the
      rest of the game with Bh4 which also puts black's king in zugzwang.
      Fischer has to move a pawn and he moves e5 followed by Be5. Black plays e4
      and Spassky replies with Be3 preventing any further pushing by Fischer's
      passed C pawn. Fischer now must move the king to f6 (Kf6) followed by
      white's Kg4. Spassky has freed his King from the H file.
      <br></br>
      <br></br>
      Fischer moves Ke5 and Spassky counters with Kg5. Out of moves, Fischer
      tries Kd5 to reposition to the Queenside followed by Spassky moving Kf5.
      Fischer pushes a5 to reopen the Queenside position. Bf2 is played by
      Spassky and Fischer develops his G pawn to g5 to give it up. Spassky
      gladly accepts with Kxg5 and Fischer goes for the Queenside pawns with
      Kc4. Spassky repositions back to f5 (Kf5) and Fischer moves Kb4. Kxe4
      followed by Kxa4 are played. Spassky moves Kd5 and Fischer moves Kb5.
      However, after Spassky played Kd6, Bobby Fischer resigned the game on move
      56.
      <br></br>
      <br></br>
      <b>
        The score following Game 1 in the 1972 World Chess Championship is now 1
        - 0 in favor of Spassky.
      </b>
      <br></br>
      <br></br>
      <CardDeck>
        <Card>
          <Card.Img
            height="300"
            src="https://en.chessbase.com/Portals/all/thumbs/066/66585.jpeg"
            alt="Game 1 start clock"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              GM Lothar Schmid starts the clock with Fischer absent.
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://images.csmonitor.com/csmarchives/2011/09/0916-Bobby-Fischer-review.jpg?alias=standard_900x600"
            alt="Fischer arrives"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              Fischer arrives late and he and Spassky shake hands
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/pete/phpEwVnvI.jpeg"
            alt="Capturing a piece"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Fischer captures a piece</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            height="300"
            src="https://en.chessbase.com/portals/4/files/news/2012/fischer09-spassky.jpg"
            alt="Blunder"
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              Fischer blunders his bishop which loses the game.
            </Card.Title>
          </Card.Body>
        </Card>
      </CardDeck>
      <br></br>
      <br></br>
      <h3>Game 3: Modern Benoni, Classical Main Line (A77)</h3>
      <b>
        Move Order: 1.d4 Nf6 2.c4 e6 3.Nf3 c5 4.d5 exd5 5.cxd5 d6 6.Nc3 g6 7.Nd2
        Nbd7 8.e4 Bg7 9.Be2 0-0 10.0-0 Re8 11.Qc2 Nh5 12.Bxh5 gxh5 13.Nc4 Ne5
        14.Ne3 Qh4 15.Bd2 Ng4 16.Nxg4 hxg4 17.Bf4 Qf6 18.g3 Bd7 19.a4 b6 20.Rfe1
        a6 21.Re2 b5 22.Rae1 Qg6 23.b3 Re7 24.Qd3 Rb8 25.axb5 axb5 26.b4 c4
        27.Qd2 Rbe8 28.Re3 h5 29.R3e2 Kh7 30.Re3 Kg8 31.R3e2 Bxc3 32.Qxc3 Rxe4
        33.Rxe4 Rxe4 34.Rxe4 Qxe4 35.Bh6 Qg6 36.Bc1 Qb1 37.Kf1 Bf5 38.Ke2 Qe4+
        39.Qe3 Qc2+ 40.Qd2 Qb3 41.Qd4 Bd3+ 0 - 1
      </b>
      <br></br>
      <b>
        <a
          href="http://www.chessgames.com/perl/chessgame?gid=1044727"
          target="_blank"
          rel="noopener noreferrer"
        >
          Game Link
        </a>
      </b>
      <br></br>
      <br></br>
      Following the loss of Game 1, Fischer gave an ultimatum to chief arbiter
      Lothar Schmid requiring that all television cameras broadcasting the match
      be removed prior to Game 2. If this ultimatum was not met, Fischer would
      forfeit the match and leave Reykjavik. Media tycoon Chester Fox had bought
      all the rights for the match and loss of broadcasting would result in huge
      financial losses for his company, Chester Fox inc. Fischer however stuck
      to his ultimatum and by the time game 2 was supposed to start, Fischer was
      absent. Spassky arrived at the playing hall on time and with the black
      pieces, started Fischer's clock. By the time thirty five minutes elapsed
      on Fischer's clock, Fox agreed to remove all cameras from the playing hall
      so Fischer would show and make his first move as white. Fischer agreed,
      but stipulated to Lothar Schmid that his elapsed thirty five minutes be
      given back to him. This request unfortunately could not be fulfilled since
      there was no regulation in the FIDE match guidelines that allowed for time
      to be given back. After one hour elapsed, Schmid was forced to stop the
      clock and Fischer forfeited game 2 giving Spassky a 2 - 0 scoreline over
      Fischer.
      <br></br>
      <br></br>
      Everybody around the world feared that Fischer was out of the match and it
      was rumored that Fischer would leave back to the United States and forfeit
      the match entirely. Before Game 3 was scheduled to start, Fischer's team
      including his lawyer, Paul Marshall, and his second, William Lombardy,
      called Schmid to ask if the third game could be played in the back room of
      the playing hall. Schmid took Fischer's demands to Spassky and
      surprisingly, against the wishes of the Russian Chess Federation, Spassky
      agreed to Fischer's terms. On the night of July 16th, 1972, Spassky
      arrives in the back room, the clock is started and Spassky plays d4.
      <br></br>
      <br></br>
      Fifteen minutes later, Fischer arrived at the back room and complained to
      Schmid again that the cameras were still too noisy and as a result, all
      cameras were shut off except for one CCTV camera which was silent. Fischer
      replied to Spassky with Nf6. Spassky goes into the Queen's Gambit with c4
      and Fischer declines the gambit with e6. Spassky responds Nf3 and Fischer
      plays c5 challenging Spassky to a Benoni game. Spassky accepts the Benoni
      and plays d5 going into the Modern Benoni main line which is one of
      Fischer's d4 opening specialities. Fischer defeated German GM Wolfgang
      Uhlmann in the 1970 Interzonal tournament in a similar Modern Benoni
      setup. Fischer captures with exd5 and Spassky recaptures playing cxd5
      followed by Fischer's d6 idea. Spassky defends his new D pawn with Nc3 and
      Fischer prepares to Fianchetto his dark squared bishop with Bg7 by first
      preparing g6. At this point in the game, the position is pretty even and
      commonly white proceeds with moves such as e4 or h3 but instead Spassky
      prepared Nd2. Fischer replies with Nbd7 continuing development and Spassky
      pushes e4. Fischer fianchettoes with Bg7 followed by Spassky's development
      of the light squared bishop with Be2 and both sides castle (O-O). Fischer
      moves Re8 to add an attaacker to Spassky's E pawn. The game at this point
      still resembles a common position of the Modern Benoni, but Spassky
      surprises Fischer with his preparation and on move 11, plays Qc2.
      <br></br>
      <br></br>
      The move Qc2 is pivotol in the game as it shifts the queen away from the
      Kingside of the board. With the queen on its starting square (d1), the
      battery created with the light squared bishop on e2 prevents black from
      developing his light square bishop fully. Seeing this move, Fischer takes
      advantage with Nh5. On the surface level, Fischer is offering a knight to
      Spassky and a consequent ruining of the pawn structure with the recapture
      by Fischer's pawn on g6. However, this move actually forces Spassky to
      capture the knight because all other moves from white will allow back to
      move into a better position. Spassky plays Bxh5 followed by the recapture
      by Fischer with gxh5. Spassky moves with pressure on Fischer's D pawn with
      Nc4. Fischer kicks Spassky's knight on c4 away with his own knight (Ne5).
      Spassky repositions the knight on c4 with Ne3 keeping an eye on the f5
      square which Fischer will eventually push to open up the closed Benoni
      structure. On move fourteen, Fischer plays Qh4 which creates all sorts of
      threats on the Kingside of the board for Spassky. The best move for white
      at move fifteen is Bd2 since Fischer's idea of Nf3+ doesn't hold water.
      The line from here would continue with something like gxf3 followed by Be5
      which threatens checkmate on h2 with Qxh2. Spassky can easily defend by
      moving the rook to the E file and moving the knight to f1 which will blunt
      black's initiative. Spassky finds Bd2 which continues development with the
      dark square bishop while also connecting rooks. Fischer responds with Ng4
      to improve the position of the knight on the Kingside and his pawn
      structure. Spassky must prevent checkmate by the queen on h2 and plays
      Nxg4 with Fischer recapturing with hxg4. Fischer's pawn structure on this
      move is now fixed. Spassky plays Bf4 with ideas of repostioning the bishop
      to g3 to keep an eye on one of the central e5 square.
      <br></br>
      <br></br>
      Fischer finds a great idea with Qf6 to remanouver his queen and attack
      Spassky's dark squared bishop on f4. If the bishop is moved immediately,
      say down its current diagonal or to g3, Fischer can play h5 followed by h4
      which will crush white's Kingside position. Spassky plays a prophylactic
      move with g3 to prevent h5 and subsequently h4 by Fischer. Fischer
      continues development with Bd7 which is met with Spassky's a4. Fischer has
      to prevent further Queenside expansion by Spassky with b6. Spassky moves
      his castled rook to the E file with Rfe1 and Fischer pushes a6. Spassky
      calculates that there is no counterplay possible on the Queenside for
      white and instead moves Re2 preparing to double rooks on the E file while
      preparing to push e5 with his current e4 pawn. Fischer plays b5 and
      Spassky immediately moves Rae1. Fischer spots that e5 will be coming to
      Qg6 effectively will open an attack on Spassky's queen if e5 is pushed.
      Spassky moves b3 to halt Fischer's expansion and Fischer plays a waiting
      move with Re7, potentially preparing to double up on the E file as well.
      Spassky plays Qd3 to support white's capture of the black b5 pawn and
      Fischer defends with Rb8. White now trades on the Queenside with axb5
      followed by black's axb5.
      <br></br>
      <br></br>
      In this middlegame, Spassky does not have a good move because e5 can't be
      pushed since the Queen will be lost and Spassky can't play anything else
      because Fischer will push b4 on the next move. Spassky elects to play b4
      himself and Fischer counters with c4 which attacks the white queen on d3
      and creates a passed C pawn for black. Spassky must move his queen and
      plays Qd2 and Fischer continues his doubling on the E file with Rbe8.
      Spassky plays the waiting move Re3 since there is no good option for white
      and Fischer capitalizes with h5 attempting to break open the white
      Kingside. Spassky must wait with R3e2 and Fischer tests Spassky's patience
      with Kh7. Spassky has to repeat with Re3 and Fischer replies Kg7. Spassky
      again plays R3e2 threatening a three fold repetition draw and now Fischer
      grabs a pawn with Bxc3. Spassky recaptures with Qxc3 and then Rxe4. Rooks
      are exchanged with Spassky playing Rxe4 followed by Fischer's Rxe4 again.
      Spassky captures with Rxe4 but this allows Fischer an opening with Qxe4 to
      improve the position of the black Queen. Spassky moves Bh6 threatening
      checkmate on g7 with the white queen on c3. Fischer prevents checkmate
      with Qg6 and on move 35, Spassky plays Bc1 which gets the bishop out of
      harms way. Fischer pins the bishop with Qb1 and Spassky moves Kf1
      attempting to unpin and move the white king out of the corner of the
      board. Fischer moves Bf5 with ideas of Bd3 or Be4 followed by Bf3. Spassky
      unpins with Ke2 and black plays Qe4+. With Qe4+, Fischer forces Spassky's
      Queen out of the long a1 to h8 diagonal and Spassky offers a trade of
      Queens with Qe3. Fischer moves Qc2+ and Spassky blocks with Qd2. Fischer
      plays Qb3 preparing for a push of black's C pawn.
      <br></br>
      <br></br>
      Time control was reached with Fischer's Qb3 on move 40 and now Fischer
      must seal his 41st move. Spassky plays Qd4 on move 41 which blunders the
      game and Fischer seals Bd3+. The next day, the game was meant to be
      continued but before Fischer could arrive to play his 41st move (Bd3+),
      Boris Spassky resigned the game on move 41 since any move will allow the C
      pawn to be pushed and thus ends the game for Spassky. Game 3 of the 1972
      World Chess Championship was actually the first time Fischer defeated
      Spassky in classical time control. Game 3 is often cited as the turning
      point in the match as Fischer now has momentum going into Game 4.
      <br></br>
      <br></br>
      <b>
        The score following Game 3 in the 1972 World Chess Championship is now 2
        - 1 in favor of Spassky
      </b>
      <br></br>
      <br></br>
      <h3>
        Game 4: Sicilian Defense: Fischer-Sozin Attack, Leonhardt Variation
        (B88)
      </h3>
      <b>
        Move Order: 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 Nc6 6.Bc4 e6
        7.Bb3 Be7 8.Be3 0-0 9.0-0 a6 10.f4 Nxd4 11.Bxd4 b5 12.a3 Bb7 13.Qd3 a5
        14.e5 dxe5 15.fxe5 Nd7 16.Nxb5 Nc5 17.Bxc5 Bxc5+ 18.Kh1 Qg5 19.Qe2 Rad8
        20.Rad1 Rxd1 21.Rxd1 h5 22.Nd6 Ba8 23.Bc4 h4 24.h3 Be3 25.Qg4 Qxe5
        26.Qxh4 g5 27.Qg4 Bc5 28.Nb5 Kg7 29.Nd4 (diagram) Rh8 30.Nf3 Bxf3
        31.Qxf3 Bd6 32.Qc3 Qxc3 33.bxc3 Be5 34.Rd7 Kf6 35.Kg1 Bxc3 36.Be2 Be5
        37.Kf1 Rc8 38.Bh5 Rc7 39.Rxc7 Bxc7 40.a4 Ke7 41.Ke2 f5 42.Kd3 Be5 43.c4
        Kd6 44.Bf7 Bg3 45.c5+ &frac12; - &frac12;
      </b>
      <br></br>
      <b>
        <a
          href="http://www.chessgames.com/perl/chessgame?gid=1044365"
          target="_blank"
          rel="noopener noreferrer"
        >
          Game Link
        </a>
      </b>
      <br></br>
      <br></br>
      Game 4 was played out on the main playing hall in Reykjavik when Spassky
      complained that the back room where Game 3 was played had ample
      distraction from the road outside the building. Fischer also complained
      that if Game 4 was to be played on the main stage, that all cameras had to
      be removed prior. Chief arbiter Lothar Schmid was once again in a tricky
      position but managed to refute Fischer's complaint as the formal complaint
      itself had not been signed by Fischer but rather his lawyer Paul Marshall.
      As a result, Fischer had to play on the main stage with the exception of
      the singular CCTV camera recording the game instead of multiple cameras.
      Both players arrived on time and in Game 4, Fischer is white and Spassky
      is black.
      <br></br>
      <br></br>
      As is typical when Fischer has the white pieces, he opened with 1. e4
      which is the strong King's pawn opening. In all classical games previous,
      Spassky had always replied with e5 to Fischer but instead Spassky prepared
      c5 transposing into the Sicilian defense. By playing the Sicilian, Spassky
      directly challenges Fischer to a Sozin attack variation. Fischer continues
      Nf3 and Spassky replies d6 which follows the standard open Sicilian line.
      Fischer strikes in the center with d4 by which Spassky captures (cxd4).
      The game transposes fully into the open Sicilian with Fischer's Nxd4 and
      Spassky's Nf6. Fischer plays Nc3 cementing the open Sicilian game. From
      this position, black has options of transposing into a Scheveningan (e6)
      or a Najdorf (a6) variation but instead Spassky plays Nc6 (Classical line
      of the open Sicilian) with an attack on Fischer's d4 knight. Fischer
      confidently plays Bc4 and the Sozin attack is on the board. Spassky plays
      the strongest reply which is e6 transposing into the
      Scheveningan-Sozin-Leonhardt variation and Fischer moves back playing Bb3.
      At this point, Fischer's light squared bishop is eyeing Spassky's kingside
      and both players control the center quite well. Spassky prepares to castle
      with Be7 on move 7. At this point in the game, the position is exactly the
      same as Fischer vs. Efim Geller from the 1962 Candidates tournament in
      Curacao. Fischer in that game played f4 immediately and lost to Geller.
      Interestingly, Efim Geller was one of Spassky's seconds for the 1972 World
      Chess Championship and as a result, Spassky knows this game probably by
      heart. Fischer instead played a slight improvement on this idea (Be3)
      which adds a defender to the knight on d4 and prepares f4.
      <br></br>
      <br></br>
      Spassky, not bothered by Fischer's slow move, castles kingside (0-0) and
      Fischer castles as well. Now both white and black's kings are safely
      protected and the game can continue. In the 1970 Palma de Mallorca
      Interzonal tournament, one of Fischer's only losses (against Bent Larsen)
      at that tournament was when Fischer played Qe2 on move 9 instead of 0-0.
      This castles move on move 9 further shows Fischer's preparation for
      Spassky. Spassky improves his queenside with a6 and Fischer plays f4
      striking in the center. Spassky replies with an active move of Nxd4 which
      is met with Bxd4 (one set of knights is traded). Spassky plays b5 which
      further activates his queenside and preparing to develop his light square
      bishop from c8. Fischer stops any further queenside expansion with a3 and
      Spassky develops his light squared bishop with Bb7. Fischer played Qd3 on
      move 13 which connects his rooks and develops his queen to the defense of
      the queenside. The first critical moment of the game is reached where
      Spassky has to decide whether to play passively as black or actively and
      Spassky, with the help of Geller's preparation, played a5 which further
      pushes on white's queenside. White now has problems pushing either f4 or
      capturing on b5 since they would lead to disadvantageous positions for
      white. Fischer plays e5 which frees his knight on c3 to move but does come
      at the price of activating Spassky's fianchettoed light square bishop. The
      pawns are exchanged with Spassky's dxe5 and Fischer's fxe5 and Spassky
      moves his f6 knight to safety playing Nd7. Noticing a weakness in the
      queenside pawns, Fischer captures on b5 playing Nxb5 and Spassky responds
      with Nc5 forking Fischer's queen on d3 and light squared bishop on b3. Nc5
      guarantees Spassky will win the white bishop pair and gives Spassky an
      advantage in the endgame. Fischer realizes this and plays Bxc5, giving up
      his dark squared bishop to Spassky's Bxc5+. Spassky's bishop now checks
      the white king and Fischer moves it to the edge of the board with Kh1. At
      this point, Spassky goes into a fifteen minute think to contemplate the
      position.
      <br></br>
      <br></br>
      Trading queen's at this stage of the game would trade down into a bishop
      and rook endgame to favor black slightly thanks to the optimum position of
      Spassky's dark squared bishop. Spassky knows that the advantage would be
      slight and instead elects to play Qg5 threatening a checkmate on g2
      (Spassky's light squared bishop on b7 nicely protects the queen if it
      captures on g2 with checkmate). Fischer prevents checkmate with Qe2 and
      Spassky develops his kingside rook with Rad8. Fischer offers to trade down
      all of the rooks with Rad1. A pair of rooks is exchanged with Rxd1 and
      Rxd1 and Spassky plays h5 to bust open the white kingside pawns. Spassky
      is at a clear advantage in this position with the black queen eyeing the
      g2 pawn and black's bishop pair staring at the castled white king. Fischer
      immediately places his knight on d6 (Nd6) to challenge the black light
      squared bishop and Spassky moves his bishop back to a8 (Ba8). Fischer now
      gains initiative and starts improving the position with Bc4 threatening to
      push the white B pawn. Spassky ignores this threat and continues with h4
      moving his H pawn closer to the white king. Fischer blocks any h3 ideas by
      pushing h3 himself. Spassky now moves the dark squared bishop to e3 (Be3)
      with the threat of Bf4 followed by Qg3 and Qh2 checkmate. Fischer responds
      by offering a Queen trade with Qg4. Spassky declines playing Qxe5 which
      equilizes captured material for both black and white. This equilizer does
      not last for long with Fischer capturing the black H pawn (Qxh4). Spassky,
      on move 26, plays a brilliancy with g5 which gains a tempo on the white
      queen and blocks the white queen from influencing the d8 square. Fischer
      plays Qg4 which will initiate a fork on the queen and the rook (the line
      might look something like: 27. Qg4 Rd8 28. Nxf7 Rxd1 29. Qxd1 Kxf7 30.
      Qd7+). Spassky responds instead with Bc5 challenging Fischer's strong
      knight on d6 and Fischer evades with Nb5. Spassky improves the position of
      the king with Kg7 allowing the rook on f8 to join the attack (by moving to
      h8) but Fischer refutes playing Nd4 (with the idea of shifting the knight
      to f3 to keep an eye on the h4 square where black's rook might be
      heading).
      <br></br>
      <br></br>
      At this critical moment in the game, Spassky indeed moves Rh8 instead of
      Rd8 which would have been winning for black. Fischer as planned plays Nf3
      which deters the black rook from jumping to h4 so Spassky plays Bxf3
      eliminating the knight. This however, allows Fischer to get rid of
      Spassky's bishop pair with Qxf3. Spassky threatens checkmate once again
      with Bd6 (the dark squared bishop supports the black Queen checkmating on
      h2) but Fischer now plays Qc3 which forces a queen trade. As an aside,
      Spassky could have prevented this with the previously mentioned Rd8 idea
      on move 29 which allows for a triple attack against the white knight on d4
      which forces Fischer to play c3 to protect it. This continuation on would
      not have worked for Fischer in this scenario because the c3 square is used
      up by the white pawn on c3.
      <br></br>
      <br></br>
      At the Qc3 move on move 32, Spassky is forced to play Qxc3 followed by
      Fischer recapturing playing bxc3. The position is now mostly drawn with
      opposite colored bishops and a pair of rooks on the board. Spassky tries
      Be5 but this is met with Rd7 with a threat of Bxe6 since black's f7 pawn
      is pinned. Spassky unpins with Kf6 and Fischer improves his king with Kg1.
      Spassky captures a doubled C pawn with Bxc3 and now Fischer plays Be2 with
      Spassky countering with Be5. Fischer continues to march his king with Kf1
      and Spassky plays Rc8 threatening to pick up the c2 pawn. This move allows
      Fischer to play Bh5 with the threat of picking up the f7 pawn. Spassky
      trades the rooks to prevent a captures on f7 with Rc7. Fischer agrees and
      plays Rxc7 and Spassky completes the trade with Bxc7. Now the engame is
      pawns with opposite colored bishops which is now completely drawn. A few
      more moves are played with Fischer playing a4 and Spassky responding with
      Ke7. Ke2 played by Fischer and f5 by Spassky. Kd3 played by Fischer and
      Spassky plays Be5 (both players at this points are trying to exploit any
      initiative in the position). Fischer pushes c4 and Spassky responds Kd6.
      Finally, Fischer plays Bf7 and Spassky plays Bg3 trying to once again find
      any weakness. Fischer added one more check on move 45 with c5+ and at this
      point, both players agreed to a draw.
      <br></br>
      <br></br>
      Spassky in this game demonstrated his capability to challenge Fischer in
      his extremely strong Sozin variation and what a great second Efim Geller
      is to Spassky. However, Spassky did have chances in the game and could
      ahve pushed for a win, but could not find the right moves. With a draw,
      Fischer had to rethink his opening preparation against the Sicilian
      defense from Spassky for future games.
      <br></br>
      <br></br>
      <b>
        The score following Game 4 in the 1972 World Chess Championship is now
        2.5 - 1.5 in favor of Spassky
      </b>
      <br></br>
      <br></br>
      <h3>Game 5: Nimzo-Indian Defense: Huebner Variation, Main Line (E41)</h3>
      <b>
        Move Order: 1.d4 Nf6 2.c4 e6 3.Nc3 Bb4 4.Nf3 c5 5.e3 Nc6 6.Bd3 Bxc3+
        7.bxc3 d6 8.e4 e5 9.d5 Ne7 10.Nh4 h6 11.f4 Ng6 12.Nxg6 fxg6 13.fxe5 dxe5
        14.Be3 b6 15.0-0 0-0 16.a4 a5 17.Rb1 Bd7 18.Rb2 Rb8 19.Rbf2 Qe7 20.Bc2
        g5 21.Bd2 Qe8 22.Be1 Qg6 23.Qd3 Nh5 24.Rxf8+ Rxf8 25.Rxf8+ Kxf8 26.Bd1
        Nf4 27.Qc2 Bxa4 0 - 1
      </b>
      <br></br>
      <b>
        <a
          href="https://www.chessgames.com/perl/chessgame?gid=1044723"
          target="_blank"
          rel="noopener noreferrer"
        >
          Game Link
        </a>
      </b>
      <br></br>
      <i>
        <b>
          "He is quite lazy, so he didn't work too much on chess."
          <br></br>-Anatoly Karpov on Boris Spassky's training habits
        </b>
      </i>
      <br></br>
      <br></br>
      Before game 5, It was rumored (from Svetozar Gligoric) that Fischer had
      put almost 14 new demands to the Icelandic chess federation which included
      among other things: fresh American newspapers everyday, a smaller chess
      board on which to play on, a toggle switch of all of the cameras filming
      the game, a new Mercedes car, and exclusive use of the hotel swimming pool
      where Fischer would be able to relax away from everyone else. All of these
      demands were not met by the Icelandic chess federation, but Fischer
      decided to play on. Spassky's seconds also advocated for a rest day before
      the game while Fischer sorted out his demands, but Spassky himself refused
      because he would have the white pieces to come and play for a win. Game 5
      was another critical game in the 1972 World Chess Championship since a win
      would tie Fischer with Spassky in terms of points and would be another
      crushing defeat for the Soviet Chess Federation if Spassky lost with the
      white pieces. The game was played on the main stage in the playing hall.
      <br></br>
      <br></br>
      Spassky opens with d4 which is the typical Spassky Queen's pawn opening.
      Fischer replies Nf6 and Spassky plays c4 transposing into the Queen's
      gambit game with an intention to play into a Nimzo-Indian defense. Fischer
      plays e6 and Spassky plays Nc3 which is standard theory of the Queen's
      Gambit declined and Fischer goes for the Nimzo-Indian with Bb4. Spassky
      plays Nf3 (the future Kasparov variation) which allows Fischer to decide
      which line of the Nimzo-Indian the game will follow. Fischer challenges
      the center and Spassky's d4 pawn with c5 which entices e3 to be played
      (Huebner variation). Spassky obliges and plays e3 and Fischer goes for
      Nc6. Spassky develops his light squared bishop with Bd3 and Fischer, as is
      standard in the Nimzo-Indian, captures Spassky's knight on c3 with his b4
      bishop. Fischer plays Bxc3 and Spassky recaptures with bxc3. This
      recapture messes up white's pawn structure and may become a potential
      weakness later in the game. Fischer strengthens his c5 pawn with d6 and
      Spassky plays e4 which gains nice control over the center. Fischer
      instinctively plays e5 and Spassky closes the center with d5. Fischer
      moves his inactive knight on c6 to e7 (Ne7) which will allow the knight to
      defend the black kingside. Spassky plays an excellent move with Nh4 with
      intentions of playing Nf5 in the future to attack Fischer's kingside if
      there is a kingside castle. Fischer also plays an excellent counter with
      h6 preparing to play g5 to kick the white h4 knight away and prevent an f4
      idea by Spassky. Spassky, at this point, spends 25 minutes contemplating
      his next move and he pushes f4. Fischer instantly plays the best move in
      the position which is Ng6 which attacks the f4 pawn and challenging the
      knight on h4. Spassky decides to eliminate the g6 knight and plays Nxg6
      with Fischer recapturing with fxg6. Spassky grabs a pawn with fxe5 and
      Fischer recaptures with dxe5. Spassky now develops his dark squared bishop
      with Be3 with tempo attacking the c5 pawn. Fischer simply defends with b6
      and now Spassky, in this position, can't really push for a win with the
      white pieces. Both of the white bishops are somewhat caged in and Fischer
      has solid pawn structures on both the kingside and queenside.
      <br></br>
      <br></br>
      Both players castle (0-0) and on move sixteen, Spassky pushes a4 trying to
      start an attack on the queenside. Fischer prevents further expansion
      pushing a5 which locks down the queenside. Spassky plays Rb1 trying to
      capture the backwards b6 pawn and Fischer plays a nice move with Bd7 which
      develops and attacks the a4 pawn. Spassky moves Rb2 with ideas of doubling
      rooks on the F file and pushing on the kingside now. Fischer plays Rb8 in
      case Spassky doesn't move his rook and Spassky conversely does move his
      rook playing Rbf2. Fischer now involves his queen with Qe7 instead of Qc7
      which would blunder the position. A potential line would be (19. Rbf2 Qc7
      20. Bxh6 gxh6 21. Rxf6 Rxf6 22. Rxf6). Spassky plays Bc2 trying to
      remanouver the unimpressive light squared bishop to a more active square.
      At this point in the game, Fischer can immediately simplify by playing 21.
      Ng4 22. Rxf8 Rxf8 23. Rxf8 Qxf8 24. Qe2 Nxe3 25. Qxe3 24. g5 which
      guarantees him at least a draw with excellent play. With this imagined
      line, Fischer's kingside can't be penetrated unless Spassky wants to lose
      material and it is very hard for white to push for a win. Instead of going
      for the preivously mentioned drawing line, Fischer plays g5 on move 21.
      Spassky moves the dark squared bishop back playing Bd2 with ideas of
      swinging the bishop to the e1-h4 diagonal and landing it on the g3 square.
      Fischer plays Qe8 and Spassky continues Be1. Fischer plays Qg6 trying to
      get the black queen to a more active square and Spassky plays Qd3 shoring
      up the white center. Fischer moves Nh5 which prompts all of te rooks to be
      traded. Spassky plays Rxf8+ and Fischer recaptures playing Rxf8. Spassky
      trades again playing Rxf8+ and now Fischer recaptures with the king
      playing Kxf8. Spassky plays Bd1 which comes with a threat of capturing the
      black knight on h5. The white queen can also come to b1 to put pressure on
      the backwards b6 pawn and keep the black queen on the sixth rank. Fischer
      moves the knight from h5 to f4 (Nf4). Spassky, in time trouble, makes the
      move Qc2?? on move 27 which completely blunders the position for white.
      Following this move, Fischer played Bxa4 and Spassky immediately resigned
      the game.
      <br></br>
      <br></br>
      Spassky resigned because if he played Qxa4 seemingly capturing the
      unguarded bishop, Fischer has Qxe4 and now there are unstoppable
      checkmates with Qxe1# and Qxg2#. Spassky could prolong by either moving
      the king to f2 or the queen to d2 but these both lose since Kf2 is an
      unstoppable mate in four with 28. Kf2 Nd3+ 29. Kg3 Qh3+ 30. Kf3 Qf4+ 31.
      Ke2 Nc1# and Qd2 would force Spassky down three pawns. The line would be
      28. Qd2 Bxd1 29. Qxd1 Qxe4 30. Qd2 a4. Spassky could have easily gone into
      drawing lines very easily in this game, but he chose to fight for a win
      which cost him with Fischer's Bxa4.
      <br></br>
      <br></br>
      After game 5, Fischer conveniently found his hotel swimming pool empty and
      relaxed there alone for the entire night in celebration of tying the
      match.
      <br></br>
      <br></br>
      <b>
        The score following Game 5 in the 1972 World Chess Championship is now
        2.5 - 2.5 tied.
      </b>
      <br></br>
      <br></br>
      <h3>
        Game 6: Queen's Gambit Declined: Tartakower Defense, Exchange variation
        (D59)
      </h3>
      <b>
        Move Order: 1.c4 e6 2.Nf3 d5 3.d4 Nf6 4.Nc3 Be7 5.Bg5 0-0 6.e3 h6 7.Bh4
        b6 8.cxd5 Nxd5 9.Bxe7 Qxe7 10.Nxd5 exd5 11.Rc1 Be6 12.Qa4 c5 13.Qa3 Rc8
        14.Bb5 a6 15.dxc5 bxc5 16.0-0 Ra7 17.Be2 Nd7 18.Nd4 Qf8 19.Nxe6 fxe6
        20.e4 d4 21.f4 Qe7 22.e5 Rb8 23.Bc4 Kh8 24.Qh3 Nf8 25.b3 a5 26.f5 exf5
        27.Rxf5 Nh7 28.Rcf1 Qd8 29.Qg3 Re7 30.h4 Rbb7 31.e6 Rbc7 32.Qe5 Qe8
        33.a4 Qd8 34.R1f2 Qe8 35.R2f3 Qd8 36.Bd3 Qe8 37.Qe4 Nf6 38.Rxf6 gxf6
        39.Rxf6 Kg8 40.Bc4 Kh8 41.Qf4 1 – 0
      </b>
      <br></br>
      <b>
        <a
          href="https://www.chessgames.com/perl/chessgame?gid=1044366"
          target="_blank"
          rel="noopener noreferrer"
        >
          Game Link
        </a>
      </b>
      <br></br>
      <i>
        <b>
          "Let's not bother with such nonsense – I'll play the [Tartakower]
          Defence. What can he achieve?..."
          <br></br>-Spassky on Fischer's change to 1. c4
        </b>
      </i>
      <br></br>
      <br></br>
      After Fischer's lonely celebration in the swimming pool following Game 5,
      the American was extremely confident as the match was now tied. He
      indicated to his second (Lombardy) that he had a surprise in store for
      Spassky in Game 6. Spassky, on the other hand, did not seem phased and
      played ping pong with his team the same night of his Game 5 loss. The
      Soviet Chess Federation implored Spassky to prepare adequately for his
      future games, but he decided against this. When informed of Fischer's
      "surprise" for Game 6, Spassky replied that if the game transposed into a
      Queen's Gambit declined, he would play the Tartakower defense in which he
      had never lost a game.
      <br></br>
      <br></br>
      Fischer opens with c4 which is a relatively new opening since he played it
      only once against Lev Polugaevsky at the 1970 Interzonal tournament.
      Spassky replies e6 and Fischer plays Nf3. Spassky strikes in the center
      with d5 and Fischer transposes into the Queen's Gambit declined with d4.
      Spassky plays Nf6 and Fischer plays Nc3 which is standard theory of the
      Queen's Gambit Declined. Spassky moves his dark squared bishop with Be7
      and Fischer responds with an aggressive Bg5 adding pressure to Spassky's
      f6 knight and as a result, Spassky castles (0-0) to safety. Fischer
      activates his light squared bishop by playing e3. This move is quite
      common in the Rubinstein system as it allows the light squared bishop to
      defend the c4 pawn in the QGD. Spassky plays h6 to kick Fischer's dark
      squared bishop back and Fischer obliges playing Bh4. Spassky now plays b6
      and finally the game enters the Tartakower defense of the Queen's Gambit
      Declined.
      <br></br>
      <br></br>A capture fest now occurs on the board with Fischer playing cxd5
      and Spassky recapturing with Nxd5. A trade of dark squared bishops occurs
      with Bxe7 and Qxe7. Fischer trades a pair of knights with Nxd5 and Spassky
      plays exd5. A common position of the Tartakower defense is reached with
      Fischer's Rc1 and Spassky develops with Be6. An alterantive could have
      been developing to b7 (Bb7) but a series of captures in the center could
      have made the bishop on the B file somewhat vulnerable to white's c1 rook.
      Fischer develops his queen playing Qa4 and Spassky strikes in the center
      with c5. Fischer piles up on the c5 pawn immediately with Qa3 which allows
      white's queen and rook to pin the c5 pawn. If the c5 pawn is pushed,
      Spassky loses his undefended queen. Spassky instead defends the c5 pawn
      with Rc8. Fischer now plays an excellent move with Bb5 which prevents
      Spassky from developing his knight to a useful square (a6, c6, and d7 are
      all covered by the bishop). Spassky wants to kick the powerful white light
      squared bishop away and thus plays a6. Fischer now plays dxc5 which keeps
      the pressure on the black kingside. The light squared bishop still can't
      be captured by the a6 pawn since Fischer will just pick up the black a8
      rook with Qxa8. Spassky instead plays bxc5 and Fischer gets his king to
      safety with castles (0-0). Spassky plays Ra7 which is the problem move for
      black in this position. A better continutation from this position could
      have been Qb7 and then Qb6. However, Ra7 looks promising because the black
      queen defends the rook and soon axb5 will be played if Fischer doesn't
      move his bishop. Realizing this, Fischer simply moves the bishop back with
      Be7. Spassky now develops his knight with Nd7 and Fischer immediately
      capitalizes with Nd4. The problem for black with this move is that cxd4 by
      black is not an option as the c8 rook hangs. Spassky now plays Qf8 but
      this allows Fischer too much and he can now simplify the game. Fischer
      starts with Nxe6 eliminating black's light squared bishop and Spassky
      recaptures the white knight with fxe6.
      <br></br>
      <br></br>Black's position now comprises of a nice pawn center but an
      unimpressive rook on a7 and a knight that still has to find a purpose in
      the game. Fischer attacks Spassky's pawn center with e4. Spassky now has
      options of either capturing on e4 with his d5 pawn or he can push d5 to
      d4. A capture with dxe4 is not impressive since it doubles black's pawns
      and allows Fischer to double rooks on the C file. Instead, Spassky pushes
      with d4 which also is not the best move which would have been c4. The move
      c4 is better since it offers a trade of queens and if Fischer declined
      with Qh3 (going after the backwards e6 pawn), Spassky easily defends with
      Qf7 and all is well for black. After Spassky's d4 push, Fischer moves f4
      which is a solid move (establishing further control of the e5 square which
      prevents the black knight from jumping to e5 or pushing e5). Spassky plays
      Qe7 to defend the e6 pawn (Fischer's plan is to move Qh3 and Bc4 to attack
      the e6 pawn twice). Fischer pushes e5 which improves white's central
      control considerably. Spassky plays Rb8 to go after the white b2 pawn, but
      Fischer ignores this attack instead playing Bc4. Spassky moves his king
      away from the white bishop's diagonal with Kh8 and Fischer plays Qh3
      establishing the double attack on the e6 pawn. Spassky defends with Nf8
      and Fischer improves with b3. Now the white B pawn is defended by the a2
      pawn. Spassky pushes a5 hoping to break open the white kingside but
      Fischer intends to break black's position with f5. Spassky captures with
      exf5 and Fischer recaptures with Rxf5.
      <br></br>
      <br></br>
      Spassky now remanouvers his knight with Nh7 with the intention of playing
      Ng5. Nh7 also comes with poison in the position since if white plays Rf7
      with an attack on the queen and maybe winning the a7 rook if the queen
      moves, Spassky could play Ng5 with a fork on the rook and queen. Fischer
      would capture the black queen with Rxe7 and Spassky would capture the
      white queen with Nxh3+ and now white loses a tempo with the check. The
      line would look like 27.Rxf5 Nh7 28. Rf7 Ng5 29. Rxe7 Nxh3+. Fischer
      instead smartly doubles rooks with Rcf1 and Spassky plays Qd8 which gets
      the queen away from threats on the seventh rank (Rf7). Fischer plays
      another excellent move with Qg3 which introduces checkmating ideas into
      the position. Spassky now has to prevent white's passed E pawn from being
      pushed and plays Re7. Fischer prevents the black knight from jumping to g5
      by playing h4. Spassky plays Rbb7 which adds another defender to the
      seventh rank and Fischer pushes his passed E pawn with e6. Spassky defends
      with c5 pawn with Rbc7. Fischer now centralizes his queen with Qe5
      preparing to further push the passed E pawn. Spassky must add more
      defenders and does with Qe8. Black's position is now being boxed in by
      white. Fischer plays a4 and now black is in zugzwang. Spassky must repeat
      moves to keep the game going with Qd8 and Fischer improves his backwards
      rook with R1f2. Spassky repeats with Qe8 and Fischer now plays R2f3.
      Spassky once again plays Qe8 and now Fischer starts his new attack with
      Bd3 aligning the bishop with the black h7 knight. Spassky once again plays
      Qe8 and Fischer creates a queen-bishop battery with Qe4.
      <br></br>
      <br></br>
      Spassky now plays Nf6 but Fischer captures playing Rxf6. Spassky
      recaptures the rook with gxf6 and Fischer reacptures with Rxf6. Spassky
      now moves his king with Kg8. Fischer moves Bc4 and now black is completely
      lost. Spassky played Kh8 and Fischer played Qf4. Following this move,
      Spassky resigned the game as the threat of Rf8+ by white wins on the spot
      (black loses the queen). After winning Game 6, Fischer now takes the lead
      over Spassky. Following Spassky's resignation, the spectators watching in
      the playing hall rose and up and gave a standing ovation for Fischer
      beating Spassky in the Tartakower defense. Spassky also stood up and
      applauded Fischer for his brilliant win. Fischer was overwhelmed by
      Spassky's sportsmanship and left the playing hall immediately.
      <br></br>
      <br></br>
      <b>
        The score following Game 6 in the 1972 World Chess Championship is now
        3.5 - 2.5 in favor of Fischer.
      </b>
      <br></br>
      <br></br>
      <h3>
        Game 7: Sicilian Defense, Najdorf Variation, Poisoned Pawn Variation
        (B97)
      </h3>
      <b>
        Move Order: 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Bg5 e6 7.f4
        Qb6 8.Qd2 Qxb2 9.Nb3 Qa3 10.Bd3 Be7 11.0-0 h6 12.Bh4 Nxe4 13.Nxe4 Bxh4
        14.f5 exf5 15.Bb5+ axb5 16.Nxd6+ Kf8 17.Nxc8 Nc6 18.Nd6 Rd8 19.Nxb5 Qe7
        20.Qf4 g6 21.a4 Bg5 22.Qc4 Be3+ 23.Kh1 f4 24.g3 g5 25.Rae1 Qb4 26.Qxb4+
        Nxb4 27.Re2 Kg7 28.Na5 b6 29.Nc4 Nd5 30.Ncd6 Bc5 31.Nb7 Rc8 32.c4 Ne3
        33.Rf3 Nxc4 34.gxf4 g4 35.Rd3 h5 36.h3 Na5 37.N7d6 Bxd6 38.Nxd6 Rc1+
        39.Kg2 Nc4 40.Ne8+ Kg6 41.h4 f6 42.Re6 Rc2+ 43.Kg1 Kf5 44.Ng7+ Kxf4
        45.Rd4+ Kg3 46.Nf5+ Kf3 47.Ree4 Rc1+ 48.Kh2 Rc2+ 49.Kg1 &frac12; -
        &frac12;
      </b>
      <br></br>
      <b>
        <a
          href="http://www.chessgames.com/perl/chessgame?gid=1044728"
          target="_blank"
          rel="noopener noreferrer"
        >
          Game Link
        </a>
      </b>
      <br></br>
    </p>
  </Layout>
)
