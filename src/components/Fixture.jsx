const Fixture = ({ match, i }) => {
    return (
        <>
            <div key={i} className="fixture">
                <div className="teams">
                    <span>
                        <img className="logo" src={"http:" + match.homeLogo} alt={match.homeTeam + "'s Logo"} />
                        <p>
                            {match.homeTeam}
                            <strong>{match.homeScore}</strong>
                        </p>
                    </span>
                    <span>
                        <img className="logo" src={"http:" + match.awayLogo} alt={match.awayTeam + "'s Logo"} />
                        <p>
                            {match.awayTeam}
                            <strong>{match.awayScore}</strong>
                        </p>
                    </span>
                </div>
                <div className="date">
                    <p>{new Date(match.fixtureDate).toLocaleString('en-NZ', {
                        day: 'numeric',
                        month: 'short',
                    })}</p>
                    <p>{new Date(match.fixtureDate).toLocaleString('en-NZ', {
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true,
                    })}</p>
                </div>
                {/* <p>Venue: {match.venue}</p> */}
            </div>
        </>
    );
};

export default Fixture;