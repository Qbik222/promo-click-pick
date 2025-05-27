(function () {

    window.addEventListener('orientationchange', function () {
        window.location.reload()
    })

    const apiURL = 'https://fav-prom.com/api_click_pick'

    const stagesData = [
        { data: new Date("2025-05-20T00:00:00+03:00") },
        { data: new Date("2025-05-25T00:00:00+03:00") },
        { data: new Date("2025-05-30T00:00:00+03:00") },
        { data: new Date("2025-06-05T00:00:00+03:00") }
    ];

    const currentDate = new Date("2025-04-05T00:00:00+03:00");

    let currentStage = stagesData.filter(stage => stage.data <= currentDate).length ?? 3;

    // let currentStage = Number(sessionStorage.getItem("currentDate"))

    // let currentStage = 4

    console.log(currentStage);

    const mainPage = document.querySelector(".fav-page"),
        unauthMsgs = document.querySelectorAll('.unauth-msg'),
        participateBtns = document.querySelectorAll('.part-btn'),
        redirectBtns = document.querySelectorAll('.btn-join'),
        loader = document.querySelector(".spinner-overlay"),
        stages = document.querySelectorAll("[data-stage]"),
        stageActive = document.querySelector(`[data-stage="${currentStage + 1}"]`),
        stagesTabs = document.querySelectorAll("[data-stage-tab]"),
        playoffStage = document.querySelector(".playoff"),
        results = document.querySelector(".results"),
        predictor = document.querySelector(".predictor"),
        playoffPredictor = predictor.querySelector(".playoff"),
        teamTextPopups = document.querySelectorAll('.playoff__choose-team-text'),
        popupsWrap = document.querySelector(".popups"),
        makePredictBtn = document.querySelector('.make-predict'),
        predictorCheckIn = document.querySelector('.predictor__checkin');

    const playoffStages = document.querySelector('[data-playoff-stage]'),
        quarterFinals = document.querySelector('[data-playoff-stage="1"]'),
        semiFinals = document.querySelector('[data-playoff-stage="2"]'),
        finals = document.querySelector('[data-playoff-stage="3"]'),
        winner = document.querySelector('[data-playoff-stage="4"]'),
        quarterFinalsPairs = document.querySelectorAll('.playoff__choose[data-choose-semifinal]'),
        semiFinalsPairs = document.querySelectorAll('.playoff__choose[data-choose-final]'),
        winnerPairs = document.querySelectorAll('.playoff__choose[data-choose-winner]'),
        semiFinalsPairsBtns = document.querySelectorAll('.playoff__choose-team[data-choose-semifinal]'),
        finalsPairsBtns = document.querySelectorAll('.playoff__choose-team[data-choose-final]'),
        winnerCard = document.querySelector('.playoff__card'),
        playoffSemiFinalPopup = document.querySelector('[data-popup="playoffSemiFinal"]'),
        playoffFinalPopup = document.querySelector('[data-popup="playoffFinal"]'),
        playoffWinnerPopup= document.querySelector('[data-popup="winner"]');

    let semiFinalsTeams = []
    let finalsTeams = []
    let winners = []


    const ukLeng = document.querySelector('#ukLeng');
    const enLeng = document.querySelector('#enLeng');

    const toggleClasses = (elements, className) => elements.forEach(el => el.classList.toggle(`${className}`));
    const toggleTranslates = (elements, dataAttr) => elements.forEach(el => {
        el.setAttribute('data-translate', `${dataAttr}`)
        el.innerHTML = i18nData[dataAttr] || '*----NEED TO BE TRANSLATED----*   key:  ' + dataAttr;
        el.removeAttribute('data-translate');
    });

    const teams = [
        { team: "Complexity", dataAttr: "complexity" },
        { team: "Falcons", dataAttr: "falcons" },
        { team: "Vitality", dataAttr: "vitality" },
        { team: "Heroic", dataAttr: "heroic" },
        { team: "Faze", dataAttr: "faze" },
        { team: "Spirit", dataAttr: "spirit" },
        { team: "B8", dataAttr: "B8" },
        { team: "3DMAX", dataAttr: "3DMAX" },
        { team: "MOUZ", dataAttr: "MOUZ" },
        { team: "Wildcard", dataAttr: "wildcard" },
        { team: "Virtus.pro", dataAttr: "virtusPro" },
        { team: "The Mongolz", dataAttr: "theMongolz" },
        { team: "FlyQuest", dataAttr: "flyQuest" },
        { team: "Furia", dataAttr: "furia" },
        { team: "Aurora", dataAttr: "aurora" },
        { team: "Lynn Vision", dataAttr: "lynnVision" },
        { team: "MIBR", dataAttr: "MIBR" },
        { team: "Natus Vincere", dataAttr: "natusVincere" },
        { team: "NRG", dataAttr: "NRG" },
        { team: "PaiN", dataAttr: "PaiN" },
        { team: "G2", dataAttr: "G2" },
        { team: "Chinggis Warriors", dataAttr: "chinggisWarriors" },
        { team: "M80", dataAttr: "M80" },
        { team: "Liquid", dataAttr: "liquid" },
        { team: "Nemiga", dataAttr: "nemiga" },
        { team: "Imperial", dataAttr: "imperial" },
        { team: "Fluxo", dataAttr: "fluxo" },
        { team: "Metizport", dataAttr: "metizport" },
        { team: "OG", dataAttr: "OG" },
        { team: "Bestia", dataAttr: "bestia" },
        { team: "Tyloo", dataAttr: "tyloo" }
    ];

    let bigLose = sessionStorage.getItem("bigLose")
    let bigWin = sessionStorage.getItem("bigWin")

    let teamsWin = JSON.parse(sessionStorage.getItem("teamsWin")) ?? []

    const stagesResult = [
        {
            defautValue: true,
            teamsBet:[
                { team: "Complexity", dataAttr: "complexity", outcome: true },
                { team: "Falcons", dataAttr: "falcons", outcome: true},
                { team: "Vitality", dataAttr: "vitality", outcome: true },
                { team: "Heroic", dataAttr: "heroic", outcome: true },
                { team: "Faze", dataAttr: "faze", outcome: true },
                { team: "Spirit", dataAttr: "spirit", outcome: true },
                { team: "B8", dataAttr: "B8", outcome: true },
            ],
            bigWin: { team: "PaiN", dataAttr: "PaiN", outcome: true },
            bigLose: { team: "NRG", dataAttr: "NRG", outcome: true }
        },
        {
            defautValue: true,
            teamsBet:[
                { team: "Complexity", dataAttr: "complexity", outcome: true },
                { team: "Falcons", dataAttr: "falcons", outcome: true},
                { team: "Vitality", dataAttr: "vitality", outcome: true },
                { team: "Heroic", dataAttr: "heroic", outcome: true },
                { team: "Faze", dataAttr: "faze", outcome: true },
                { team: "Spirit", dataAttr: "spirit", outcome: true },
                { team: "B8", dataAttr: "B8", outcome: true },
            ],
            bigWin: { team: "Falcons", dataAttr: "falcons", outcome: true },
            bigLose: { team: "NRG", dataAttr: "NRG", outcome: true }
        },
        {
            defautValue: true,
            teamsBet:[
                { team: "Complexity", dataAttr: "complexity", outcome: true },
                { team: "Falcons", dataAttr: "falcons", outcome: true},
                { team: "Vitality", dataAttr: "vitality", outcome: true },
                { team: "Heroic", dataAttr: "heroic", outcome: true },
                { team: "Faze", dataAttr: "faze", outcome: true },
                { team: "Spirit", dataAttr: "spirit", outcome: true },
                { team: "B8", dataAttr: "B8", outcome: true },
            ],
            bigWin: { team: "PaiN", dataAttr: "PaiN", outcome: true },
            bigLose: { team: "NRG", dataAttr: "NRG", outcome: true }
        },
        {
            defautValue: true,
            teamsBet:[
                { team: "Complexity", dataAttr: "complexity", outcome: true },
                { team: "Falcons", dataAttr: "falcons", outcome: true},
                { team: "Vitality", dataAttr: "vitality", outcome: true },
                { team: "Heroic", dataAttr: "heroic", outcome: true },
                { team: "Faze", dataAttr: "faze", outcome: true },
                { team: "Spirit", dataAttr: "spirit", outcome: true },
                { team: "B8", dataAttr: "B8", outcome: true },
            ],
            bigWin: { team: "PaiN", dataAttr: "PaiN", outcome: true },
            bigLose: { team: "NRG", dataAttr: "NRG", outcome: true }
        }

    ]

    let quoterFinalsData = [...stagesResult[2].teamsBet, stagesResult[2].bigWin ]

    let loaderBtn = false

    let locale = sessionStorage.getItem("locale") ?? "en"

    if (ukLeng) locale = 'uk';
    if (enLeng) locale = 'en';

    let debug = true

    let othersArray = []
    let indexCard = false

    // if (debug) hideLoader()

    let i18nData = {};
    const translateState = true;
    let userId = Number(sessionStorage.getItem('userId')) ?? 77777779;

    const request = function (link, extraOptions) {
        return fetch(apiURL + link, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            ...(extraOptions || {})
        })
            .then(res => {
                if (!res.ok) throw new Error('API error');
                return res.json();
            })
            .catch(err => {
                console.error('API request failed:', err);

                // reportError(err);

                // document.querySelector('.fav-page').style.display = 'none';
                // if (window.location.href.startsWith("https://www.favbet.hr/")) {
                //     window.location.href = '/promocije/promocija/stub/';
                // } else {
                //     window.location.href = '/promos/promo/stub/';
                // }

                return Promise.reject(err);
            });

    }

    function renderTeamBlocks(popupAttr, teams) {
        const popup = document.querySelector(`[data-popup="${popupAttr}"]`);
        console.log(popup)
        const container = popup.querySelector('.playoff__popup-scroll');

        if (!container) return;

        container.innerHTML = '';

        teams.forEach(({ dataAttr }) => {
            const teamBlock = document.createElement('div');
            teamBlock.className = 'playoff__choose-team _open'; // можеш динамічно змінювати на _selected

            teamBlock.innerHTML = `
            <div class="playoff__choose-team-icon"></div>
            <div class="playoff__choose-team-text" data-translate="${dataAttr}" data-team="${dataAttr}">
            </div>
            <div class="playoff__choose-team-btn"></div>
        `;

            container.appendChild(teamBlock);
        });
        translate()
    }

    function sendPredict(){
        if(currentStage <= 2){
            const otherTeams = JSON.parse(sessionStorage.getItem("teamsWin"));
            const bigWin = JSON.parse(sessionStorage.getItem("bigWin"));
            const bigLose = JSON.parse(sessionStorage.getItem("bigLose"));

            // console.log(otherTeams, bigWin, bigLose);


            const predictBody = {
                userid: userId,
                bet: {
                    teamsBet: [...otherTeams],
                    bigWinner: {...bigWin},
                    bigLoser: {...bigLose},
                }
            }

            request(`/bet/stage/${currentStage + 1}`, {
                method: 'POST',
                body: JSON.stringify(predictBody),
            }).then(res => {
                if (res.success) {
                    setCurrentPredict()
                }
            })
            console.log(predictBody)
        }

    }

    function setCurrentPredict() {
        getUserPredict().then(predict => {
            const stageBet = predict?.[`stage${currentStage + 1}Bet`];

            if (!stageBet) {
                console.warn(`No bets for stage ${currentStage + 1}`);
                predictorCheckIn.classList.add('hide');
                return;
            }

            const stageOthers = stageActive.querySelector(".stage__wrap"),
                stageOtherCards = stageOthers.querySelectorAll(".stage__card"),
                stageWinCard = stageActive.querySelector(`[data-big-stage="bigWin"]`),
                stageWinCardTeam = stageWinCard.querySelector(".stage__card-text"),
                stageLoseCard = stageActive.querySelector(`[data-big-stage="bigLose"]`),
                stageLoseCardTeam = stageLoseCard.querySelector(".stage__card-text"),
                predictOtherTeams = stageBet.teamsBet,
                predictWinner = stageBet.bigWinner,
                predictLoser = stageBet.bigLoser;

            predictorCheckIn.classList.remove('hide');

            sessionStorage.setItem("teamsWin", JSON.stringify(predictOtherTeams));
            sessionStorage.setItem("bigWin", JSON.stringify(predictWinner));
            sessionStorage.setItem("bigLose", JSON.stringify(predictLoser));
            teamsWin = JSON.parse(sessionStorage.getItem("teamsWin"));
            bigWin = sessionStorage.getItem("bigWin");
            bigLose = sessionStorage.getItem("bigLose");


            stageWinCard.classList.add("_selected");
            stageWinCard.classList.remove("_open");
            stageLoseCard.classList.add("_selected");
            stageLoseCard.classList.remove("_open");

            stageWinCardTeam.textContent = translateKey(predictWinner.dataAttr);
            stageLoseCardTeam.textContent = translateKey(predictLoser.dataAttr);

            stageOtherCards.forEach((card, i) => {
                const cardTeamName = card.querySelector(".stage__card-text");
                const team = teamsWin[i];
                // if (!team) return; // якщо раптом менше команд у ставці
                const dataAttr = team.dataAttr;

                console.log(dataAttr);



                cardTeamName.setAttribute("data-team", dataAttr);
                cardTeamName.textContent = translateKey(dataAttr);
                card.classList.remove("_open");
                card.classList.add("_selected");
                // console.log(team)
                // console.log(card)
            });

            console.log("Loaded user prediction:", stageBet);
        }).catch(err => {
            console.error("Failed to load user prediction", err);
        });
        checkUserAuth()
    }

    function setPlayoff(quarterFinals, semiFinals, finals, winner){



        const quarterFinalsCards = quarterFinals.querySelectorAll(".playoff__choose-team");
        const semiFinalsCards = semiFinals.querySelectorAll(".playoff__choose-team");
        const FinalsCards = finals.querySelectorAll(".playoff__choose-team");
        const winnerCards = winner.querySelectorAll(".playoff__choose-team");

        console.log(semiFinalsCards);

        quarterFinalsCards.forEach((card, i) => {

            const teamCardName = card.querySelector(".playoff__choose-team-text");

            const team = quoterFinalsData[i];

            teamCardName.setAttribute("data-team", team.dataAttr);
            card.setAttribute("data-team", team.dataAttr);
            teamCardName.textContent = translateKey(team.dataAttr);

            card.classList.add("_done");



        })

        semiFinalsCards.forEach((card, i) => {
            card.classList.remove("_done", "_selected");
            card.classList.add("_open");
        })

    }

    async function getUserPredict() {
        const res = await request('/stage');
        console.log(res.find(item => item.userid === userId));
        return res.find(item => item.userid === userId);
    }

    function hideLoader(){
        loader.classList.add("hide")
        document.body.style.overflow = "auto"
        mainPage.classList.remove("loading")
    }

    function checkUserAuth() {
        const loadTime = 200;

        setTimeout(() => {
            const showElements = (elements) => elements.forEach(el => el.classList.remove('hide'));
            const hideElements = (elements) => elements.forEach(el => el.classList.add('hide'));

            if (!userId) {
                hideElements(participateBtns);
                showElements(unauthMsgs);
                hideLoader();
                return Promise.resolve(false);
            }else{
                showElements(participateBtns);
                hideElements(unauthMsgs);
            }

            hideElements(unauthMsgs);
            hideLoader();
        }, loadTime);
    }

    function reportError(err) {
        const reportData = {
            origin: window.location.href,
            userid: userId,
            errorText: err?.error || err?.text || err?.message || 'Unknown error',
            type: err?.name || 'UnknownError',
            stack: err?.stack || ''
        };

        fetch('https://fav-prom.com/api-cms/reports/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reportData)
        }).catch(console.warn);
    }

    function translate() {
        const elems = document.querySelectorAll('[data-translate]')
        if (elems && elems.length) {
            if(translateState){
                elems.forEach(elem => {
                    const key = elem.getAttribute('data-translate');
                    elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
                    if (i18nData[key]) {
                        elem.removeAttribute('data-translate');
                    }
                })
            }else{
                console.log("translation works!")
            }
        }
        refreshLocalizedClass(mainPage);
    }

    function refreshLocalizedClass(element) {
        if (!element) {
            return;
        }
        for (const lang of ['uk', 'en']) {
            element.classList.remove(lang);
        }
        element.classList.add(locale);
    }

    function renderUsers(week) {
        request(`/users/${week}`)
            .then(data => {
                const users = data;
                populateUsersTable(users, userId, week);
            });
    }

    function populateUsersTable(users, currentUserId, week) {
        resultsTable.innerHTML = '';
        resultsTableOther.innerHTML = '';
        if (!users?.length) return;
        const currentUser = users.find(user => user.userid === currentUserId);
        const isTopCurrentUser = currentUser && users.slice(0, 10).some(user => user.userid === currentUserId);
        const topUsersLength = !userId || isTopCurrentUser  ? 13 : 10;
        const topUsers = users.slice(0, topUsersLength);
        topUsers.forEach(user => {
            displayUser(user, user.userid === currentUserId, resultsTable, topUsers, isTopCurrentUser, week);
        });
        if (!isTopCurrentUser && currentUser) {
            displayUser(currentUser, true, resultsTableOther, users, false, week);
        }
    }

    function displayUser(user, isCurrentUser, table, users, isTopCurrentUser, week) {
        const renderRow = (userData, options = {}) => {
            const { highlight = false, neighbor = false } = options;
            const userRow = document.createElement('div');
            userRow.classList.add('table__row');

            const userPlace = users.indexOf(userData) + 1;
            const prizeKey = debug ? null : getPrizeTranslationKey(userPlace, week);

            if (userPlace <= 3) {
                userRow.classList.add(`place${userPlace}`);
            }

            if (highlight || isCurrentUser && !neighbor) {
                userRow.classList.add('you');
            } else if (neighbor) {
                userRow.classList.add('_neighbor');
            }

            userRow.innerHTML = `
            <div class="table__row-item">
                ${userPlace < 10 ? '0' + userPlace : userPlace}
                ${isCurrentUser && !neighbor ? '<span class="you">' + translateKey("you") + '</span>' : ''}
            </div>
            <div class="table__row-item">
                ${isCurrentUser && !neighbor ? userData.userid : maskUserId(userData.userid)}
            </div>
            <div class="table__row-item">
                ${userData.points}
            </div>
            <div class="table__row-item">
                ${prizeKey ? translateKey(prizeKey) : ' - '}
            </div>
        `;

            table.append(userRow);
        };
        if (isCurrentUser && !isTopCurrentUser) {
            const index = users.indexOf(user);
            if (users[index - 1]) {
                renderRow(users[index - 1], { neighbor: true });
            }
            renderRow(user, { highlight: true });
            if (users[index + 1]) {
                renderRow(users[index + 1], { neighbor: true });
            }
        } else {
            renderRow(user);
        }
    }

    function translateKey(key, defaultValue) {
        if (!key) {
            return;
        }
        let needKey = debug ? key : `*----NEED TO BE TRANSLATED----* key: ${key}`

        defaultValue =  needKey || key;
        return i18nData[key] || defaultValue;
    }

    function maskUserId(userId) {
        return "**" + userId.toString().slice(2);
    }

    function setStatePickStage(stage){
        const stageCardsWrap = stage.querySelector('[data-cards-wrap="stage"]')
        if(!stageCardsWrap) return
        const stageCards = stageCardsWrap.querySelectorAll('.stage__card');
        const stageCardWin = stage.querySelector('[data-big-stage="bigWin"]');
        const stageCardLose = stage.querySelector('[data-big-stage="bigLose"]');
        const stageCardWinName = stageCardWin.querySelector('.stage__card-text');
        const stageCardLoseName = stageCardLose.querySelector('.stage__card-text');

        const stageNum = Number(stage.getAttribute('data-stage'));
        let stageState = stage.getAttribute('data-pick-stage');
        const stageResultData = stagesResult[stageNum -1]

        let othersTeams = stageResultData.teamsBet
        let bigWinTeam = stageResultData.bigWin
        let bigLoseTeam = stageResultData.bigLose

        stageCardWin.classList.remove('_open', '_selected', '_lose', '_win');
        stageCardLose.classList.remove('_open', '_selected', '_lose', '_win');

        if(stageState === "done"){
            console.log(stageCards)
            stageCards.forEach((card, i) => {
                const teamName = card.querySelector('.stage__card-text');
                card.classList.remove('_open', '_selected', '_lose', '_win', "_done");
                if(stageResultData.defautValue) card.classList.add('_done');

                teamName.setAttribute('data-team', othersTeams[i].dataAttr);
                teamName.setAttribute('data-translate', othersTeams[i].dataAttr);
            });
            stageCardWinName.setAttribute('data-team', bigWinTeam.dataAttr);
            stageCardWinName.setAttribute('data-translate', bigWinTeam.dataAttr);
            stageCardLoseName.setAttribute('data-team', bigLoseTeam.dataAttr);
            stageCardLoseName.setAttribute('data-translate', bigLoseTeam.dataAttr);


            if(stageResultData.defautValue){
                stageCardWin.classList.add('_done');
                stageCardLose.classList.add('_done');
                stageCards.forEach((card, i) =>{
                    card.classList.add("_done")
                })
            }else{
                console.log(bigWinTeam.outcome)
                stageCards.forEach((card, i) =>{
                    const currentData = othersTeams[i]
                    if(currentData.outcome){
                        card.classList.add('_win');
                    }else{
                        card.classList.add('_lose');
                    }
                })
                if(bigWinTeam.outcome){
                    stageCardWin.classList.add('_win');
                }else{
                    console.log(stageCardWin)
                    stageCardWin.classList.add('_lose');
                }
                if(bigLoseTeam.outcome){
                    stageCardLose.classList.add('_win');
                }else{
                    stageCardLose.classList.add('_lose');
                }
            }



        }
        if(stageState === "active"){
            stageCards.forEach((card, i) => {
                const teamName = card.querySelector('.stage__card-text');
                card.classList.remove('_open', '_selected', '_lose', '_win', "_done");
                card.classList.add('_open');

                teamName.setAttribute('data-translate', "popupLoseTitle" );

            })
            stageCardWin.classList.add("_open")
            stageCardLose.classList.add("_open")

            stageCardWinName.setAttribute('data-translate', "popupLoseTitle");
            stageCardLoseName.setAttribute('data-translate', "popupLoseTitle");
        }
        translate()
    }

    function openPopup(dataAttr, container){
        const currentPopup = container.querySelector(`[data-popup="${dataAttr}"]`);

        container.classList.remove('overlay-opacity');

        currentPopup.classList.remove('hide');
        document.body.style.overflow = "hidden";

    }

    function closePopup(container){
        const popups = container.querySelectorAll('.playoff__popup');
        const allPopupsTeamTabs = container.querySelectorAll(".playoff__choose-team");

        allPopupsTeamTabs.forEach((team) => {
            team.classList.remove('_selected');
            team.classList.remove('_lock');
            team.classList.add('_open');
        })

        popups.forEach(popup => {
            popup.classList.add('hide');
        })
        container.classList.add('overlay-opacity');
        document.body.style.overflow = "auto";

        console.log(teamsWin)

        if(teamsWin && teamsWin.length === 6 && bigLose && bigWin){
            console.log("predict")
            makePredictBtn.classList.remove("_lock")
        }

    }

    function getPrizeTranslationKey(place, week) {
        if (place <= 3) return `prize_${week}-${place}`;
        if (place <= 10) return `prize_${week}-4-10`;
        if (place <= 25) return `prize_${week}-11-25`;
        if (place <= 50) return `prize_${week}-26-50`;
        if (place <= 75) return `prize_${week}-51-75`;
        if (place <= 100) return `prize_${week}-76-100`;
        if (place <= 125) return `prize_${week}-101-125`;
        if (place <= 150) return `prize_${week}-126-150`;
        if (place <= 175) return `prize_${week}-151-175`;
        if (place <= 200) return `prize_${week}-176-200`;
    }

    function extractTeamData(pairElement, teamSelector, groupAttr) {
        const teams = pairElement.querySelectorAll(teamSelector);
        return Array.from(teams).map(team => ({
            dataAttr: team.getAttribute('data-team'),
            pairNum: Number(team.closest(`[${groupAttr}]`)?.getAttribute(groupAttr))
        }));
    }

    function addTeamsFromPair(pairs, teamsArray) {
        let result = [...teamsArray];
        pairs.forEach(pair => {
            const extracted = extractTeamData(pair, '.playoff__choose-team[data-team]', 'data-choose-semifinal');
            result = [...result, ...extracted];
        });
        return result;
    }

    function renderPlayoffPopup(popupElement, teamsPlayoff, dataName, temporaryDataName) {
        const scrollContainer = popupElement.querySelector('.playoff__popup-scroll');
        if (!scrollContainer) return;

        const savedData = JSON.parse(sessionStorage.getItem(dataName)) || null;

        if (!savedData) {
            popupElement.querySelector(".playoff__popup-btn").classList.add('_lock');
        }

        scrollContainer.innerHTML = '';

        teamsPlayoff.forEach(team => {
            const teamDiv = document.createElement('div');
            teamDiv.className = 'playoff__choose-team _open';
            teamDiv.dataset.team = team.dataAttr;

            const iconDiv = document.createElement('div');
            iconDiv.className = 'playoff__choose-team-icon';

            const textDiv = document.createElement('div');
            textDiv.className = 'playoff__choose-team-text';
            textDiv.dataset.team = team.dataAttr;
            textDiv.textContent = translateKey(team.dataAttr);

            const btnDiv = document.createElement('div');
            btnDiv.className = 'playoff__choose-team-btn';

            teamDiv.append(iconDiv, textDiv, btnDiv);
            scrollContainer.appendChild(teamDiv);

            if (savedData && savedData.dataAttr === team.dataAttr) {
                teamDiv.classList.add('_selected');
                teamDiv.classList.remove('_open');
            }
        });

        const teamTabs = scrollContainer.querySelectorAll('.playoff__choose-team');

        teamTabs.forEach((teamTab, i) => {
            teamTab.addEventListener('click', () => {
                const teamName = teamTab.getAttribute('data-team');
                const selectedTeam = teamsPlayoff.find(team => team.dataAttr.toLowerCase() === teamName.toLowerCase());
                popupElement.querySelector(".playoff__popup-btn").classList.remove('_lock');
                sessionStorage.setItem(temporaryDataName, JSON.stringify(selectedTeam));

                teamTabs.forEach((item, j) => {
                    item.classList.toggle('_selected', i === j);
                    item.classList.toggle('_open', i !== j);
                });
            });
        });
    }

    async function init() {
        let attempts = 0;
        const maxAttempts = 20;
        const attemptInterval = 50;

        function tryDetectUserId() {
            if (window.store) {
                const state = window.store.getState();
                userId = state.auth.isAuthorized && state.auth.id || '';
            } else if (window.g_user_id) {
                userId = window.g_user_id;
            }
        }

        function quickCheckAndRender() {
            request('/stage').then((res) => {
                const userStages = res.find(user => user.userid === userId)

                if(userStages) {
                    stagesResult.forEach((stage, i) =>{
                        if(userStages[`stage${i + 1}Bet`]){
                            stagesResult[i] = {
                                teamsBet: [...userStages[`stage${i + 1}Bet`].teamsBet],
                                bigWin: userStages[`stage${i + 1}Bet`].bigWinner,
                                bigLose: userStages[`stage${i + 1}Bet`].bigLoser
                            }
                        }
                    })

                    quoterFinalsData = [...stagesResult[2].teamsBet, stagesResult[2].bigWin ];


                }
                if(currentStage === 3){

                    console.log(quarterFinals)

                    setPlayoff(quarterFinals, semiFinals, finals, winner)

                    semiFinalsTeams = [...addTeamsFromPair(quarterFinalsPairs, [])];
                    finalsTeams = [...addTeamsFromPair(semiFinalsPairs, [])];
                    winners = [...addTeamsFromPair(winnerPairs, [])];


                    semiFinalsPairsBtns.forEach((btn, i) =>{
                        const confirmPredictBtn = playoffSemiFinalPopup.querySelector(".playoff__popup-btn"),
                            btnTeamName = btn.querySelector('.playoff__choose-team-text');

                        let temporaryData = sessionStorage.getItem(`semiFinalsTemporary${i + 1}`);
                        sessionStorage.setItem(`semiFinals${i + 1}`, temporaryData);

                        let btnCurrentData = JSON.parse(sessionStorage.getItem(`semiFinals${i + 1}`));

                        if(semiFinalsTeams.length < 4){
                            confirmPredictBtn.classList.add('_lock');
                        }else{
                            confirmPredictBtn.classList.remove('_lock');
                        }
                        if(btnCurrentData){
                            btn.classList.add('_selected');
                            btn.setAttribute("data-team", btnCurrentData.dataAttr);
                            btnTeamName.textContent = translateKey(btnCurrentData.dataAttr);
                        }else{
                            btn.classList.remove('_selected');
                            btn.classList.add('_open');
                        }
                        closePopup(popupsWrap);

                        btn.addEventListener('click', e => {
                            semiFinalsTeams = [...addTeamsFromPair(quarterFinalsPairs, [])];
                            const btnPairNumber = Number(btn.getAttribute("data-choose-semifinal"))


                            let predictPairData = []

                            console.log(semiFinalsTeams)
                            semiFinalsTeams.forEach(team =>{
                                if(team.pairNum === btnPairNumber){
                                    predictPairData.push(team);
                                }
                            })



                            console.log(semiFinalsTeams);

                            renderPlayoffPopup(playoffSemiFinalPopup, predictPairData,`semiFinals${i + 1}`, `semiFinalsTemporary${i + 1}`)

                            openPopup("playoffSemiFinal", popupsWrap);

                            confirmPredictBtn.addEventListener("click", e => {

                                temporaryData = sessionStorage.getItem(`semiFinalsTemporary${i + 1}`);
                                sessionStorage.setItem(`semiFinals${i + 1}`, temporaryData);

                                btnCurrentData = JSON.parse(sessionStorage.getItem(`semiFinals${i + 1}`));

                                console.log(btnCurrentData)
                                if(btnCurrentData){
                                    btn.classList.add('_selected');
                                    btn.setAttribute("data-team", btnCurrentData.dataAttr);
                                    btnTeamName.textContent = translateKey(btnCurrentData.dataAttr);
                                }
                                if(semiFinalsTeams.length < 4){
                                    confirmPredictBtn.classList.add('_lock');
                                }else{
                                    confirmPredictBtn.classList.remove('_lock');
                                }
                                closePopup(popupsWrap);
                            })

                        })

                    })

                    finalsPairsBtns.forEach((btn, i) => {
                        const confirmPredictBtn = playoffFinalPopup.querySelector(".playoff__popup-btn"),
                            btnTeamName = btn.querySelector('.playoff__choose-team-text');

                        let temporaryData = sessionStorage.getItem(`finalsTemporary${i + 1}`);
                        sessionStorage.setItem(`finals${i + 1}`, temporaryData);

                        let btnCurrentData = JSON.parse(sessionStorage.getItem(`finals${i + 1}`));

                        if (btnCurrentData) {
                            btn.classList.add('_selected');
                            btn.setAttribute("data-team", btnCurrentData.dataAttr);
                            btnTeamName.textContent = translateKey(btnCurrentData.dataAttr);
                        }else{
                            btn.classList.remove('_selected');
                            btn.classList.add('_open');
                        }

                        closePopup(popupsWrap);

                        btn.addEventListener('click', e => {
                            finalsTeams = [...addTeamsFromPair(semiFinalsPairs, [])];
                            const btnPairNumber = Number(btn.getAttribute("data-choose-final"));
                            const confirmPredictBtn = playoffFinalPopup.querySelector(".playoff__popup-btn")

                            let validPairNums = btnPairNumber === 1 ? [1, 2] : [3, 4];

                            const predictPairData = finalsTeams.filter(team => validPairNums.includes(team.pairNum));

                            renderPlayoffPopup(playoffFinalPopup, predictPairData, `finals${i + 1}`, `finalsTemporary${i + 1}`);
                            openPopup("playoffFinal", popupsWrap);

                            const confirmHandler = () => {
                                temporaryData = sessionStorage.getItem(`finalsTemporary${i + 1}`);
                                sessionStorage.setItem(`finals${i + 1}`, temporaryData);

                                btnCurrentData = JSON.parse(sessionStorage.getItem(`finals${i + 1}`));

                                if (btnCurrentData) {
                                    btn.classList.add('_selected');
                                    btn.setAttribute("data-team", btnCurrentData.dataAttr);
                                    btnTeamName.textContent = translateKey(btnCurrentData.dataAttr);
                                }

                                confirmPredictBtn.removeEventListener("click", confirmHandler);
                                closePopup(popupsWrap);
                            };

                            confirmPredictBtn.addEventListener("click", confirmHandler);
                        });
                    });

                    winnerCard.addEventListener('click', e => {
                        winners = [...addTeamsFromPair(winnerPairs, [])];
                        const confirmPredictBtn = playoffWinnerPopup.querySelector(".playoff__popup-btn"),
                            btnTeamName = winnerCard.querySelector(".playoff__card-text");

                        renderPlayoffPopup(playoffWinnerPopup, winners, `winner`, `winnerTemporary`);
                        openPopup("winner", popupsWrap);

                        const confirmHandler = () => {
                            const temporaryData = sessionStorage.getItem(`winnerTemporary`);
                            sessionStorage.setItem(`winner`, temporaryData);

                            const btnCurrentData = JSON.parse(sessionStorage.getItem(`winner`));

                            if (btnCurrentData) {
                                winnerCard.classList.add('_selected');
                                winnerCard.setAttribute("data-team", btnCurrentData.dataAttr);
                                btnTeamName.textContent = translateKey(btnCurrentData.dataAttr);
                            }

                            confirmPredictBtn.removeEventListener("click", confirmHandler);
                            closePopup(popupsWrap);
                        };

                        confirmPredictBtn.addEventListener("click", confirmHandler);
                    });

                }
            }).then((res) => {
                stages.forEach((stage, i) => {

                    currentStage > stages.length - 1 ? currentStage = stages.length - 1 : null;
                    console.log(currentStage);

                    stage.classList.toggle('_active', i === currentStage);
                    stagesTabs[i].classList.toggle('_active', i === currentStage);

                    const top = stage.querySelector(".stage__top");
                    const bottom = stage.querySelector(".stage__bottom");
                    const timer = stage.querySelector(".timer");
                    const playoffWrap = stage.querySelector(".playoff__wrapper");

                    if (i > currentStage) {
                        top?.classList.add("hide");
                        bottom?.classList.add("hide");
                        playoffWrap?.classList.add("hide");
                        timer?.classList.remove("hide");
                        stage.setAttribute("data-pick-stage", "lock")
                    } else {
                        top?.classList.remove("hide");
                        bottom?.classList.remove("hide");
                        playoffWrap?.classList.remove("hide");
                        timer?.classList.add("hide");
                    }

                    if(i === currentStage) {
                        stage.setAttribute("data-pick-stage", "active")
                    }
                    if(i < currentStage) {
                        stage.setAttribute("data-pick-stage", "done")
                        stage.classList.add("_done")
                    }
                    setStatePickStage(stage);
                    setCurrentPredict()
                });
                stagesTabs.forEach(tab => {
                    tab.addEventListener('click', (e) => {
                        if (e.target.closest('._active')) return
                        const targetStageValue = tab.getAttribute('data-stage-tab');
                        const targetStage = document.querySelector(`[data-stage="${targetStageValue}"]`);

                        stages.forEach(stage => stage.classList.remove('_active'));
                        stagesTabs.forEach(t => t.classList.remove('_active'));

                        tab.classList.add('_active');
                        targetStage?.classList.add('_active');

                        if(Number(targetStageValue) - 1 !== currentStage ){
                            makePredictBtn.classList.add('hide');
                            results.classList.add("noBg")

                        }else{
                            makePredictBtn.classList.remove('hide');
                            results.classList.remove("noBg")
                        }

                    });
                });

                renderTeamBlocks('bigWin', teams);
                renderTeamBlocks('bigLose', teams);
                renderTeamBlocks('Others', teams);

                document.addEventListener("click", (e) => {
                    const target = e.target,
                        activeStage = document.querySelector(`[data-stage]._active`),
                        popupsCloseBtn = target.closest('.playoff__popup-close'),
                        popup = target.closest('.playoff__popup');
                    // логіка для перших 3х етапів
                    if (currentStage <= 2) {
                        const clickedCard = target.closest('.stage__card'),
                            cardBigWin = target.closest('[data-big-stage="bigWin"]'),
                            cardBigLose = target.closest('[data-big-stage="bigLose"]'),
                            bigWinPopup = target.closest('[data-popup="bigWin"]'),
                            bigLosePopup = target.closest('[data-popup="bigLose"]'),
                            OthersPopup = target.closest('[data-popup="Others"]'),
                            popupsTeam = target.closest('.playoff__choose-team'),
                            othersCard = target.closest('.stage__card'),
                            allPopupsTeam = target.closest(".playoff__popup")?.querySelectorAll('.playoff__choose-team'),
                            clickedTeamName = target.querySelector('[data-team]')?.getAttribute('data-team'),
                            activeBigWin = activeStage?.querySelector(`[data-big-stage="bigWin"]`),
                            activeBigWinTeam = activeBigWin?.querySelector(".stage__card-text"),
                            activeBigLose = activeStage?.querySelector(`[data-big-stage="bigLose"]`),
                            activeBigLoseTeam = activeBigLose?.querySelector(".stage__card-text"),
                            bigWinPopupsTeam = document.querySelector(`[data-popup="bigWin"]`).querySelectorAll('.playoff__choose-team-text'),
                            bigLosePopupsTeam = document.querySelector(`[data-popup="bigLose"]`).querySelectorAll('.playoff__choose-team-text'),
                            othersPopupsTeam = document.querySelector(`[data-popup="Others"]`).querySelectorAll('.playoff__choose-team-text'),
                            confirmChooseBtn = target.closest('.playoff__popup-btn'),
                            othersConfirmBtn = document.querySelector(`[data-popup="Others"]`).querySelector('.playoff__popup-btn'),
                            bigWinConfirmBtn = document.querySelector(`[data-popup="bigWin"]`).querySelector('.playoff__popup-btn'),
                            bigLoseConfirmBtn = document.querySelector(`[data-popup="bigLose"]`).querySelector('.playoff__popup-btn'),
                            activeOthers = activeStage.querySelector(`[data-cards-wrap="stage"]`).querySelectorAll('.stage__card');

                        // відкриття попапу на 3 0
                        if(cardBigWin){
                            sessionStorage.removeItem("bigWinTemporary");
                            if(bigWin){
                                bigWinConfirmBtn.classList.remove('_lock');
                                sessionStorage.setItem("bigWinTemporary", bigWin);
                            }
                            if(sessionStorage.getItem("bigWinTemporary")){
                                bigWinConfirmBtn.classList.remove('_lock')
                            }else{
                                bigWinConfirmBtn.classList.add('_lock')
                            }

                            bigWinPopupsTeam.forEach((team) => {
                                const teamName = activeStage.querySelector(`[data-big-stage="bigLose"]`).querySelector(".stage__card-text");
                                const teamWrap = team.closest(".playoff__choose-team")
                                const isSelectedTeam = teamName.getAttribute('data-team') === team.getAttribute('data-team');
                                const isSelectedBigWin = JSON.parse(bigWin)?.dataAttr === team.getAttribute("data-team")

                                if(isSelectedBigWin){
                                    teamWrap.classList.remove('_open');
                                    teamWrap.classList.remove('_lock');
                                    teamWrap.classList.add('_selected');
                                }
                                if(isSelectedTeam){
                                    teamWrap.classList.add('hide');
                                }
                            })

                            openPopup("bigWin", popupsWrap)
                        }

                        // відкриття попапу на 0 3
                        if(cardBigLose){
                            sessionStorage.removeItem("bigLoseTemporary");
                            if(bigLose){
                                bigLoseConfirmBtn.classList.remove('_lock');
                                sessionStorage.setItem("bigLoseTemporary", bigLose);
                            }
                            if(sessionStorage.getItem("bigLoseTemporary")){
                                bigLoseConfirmBtn.classList.remove('_lock')
                            }else{
                                bigLoseConfirmBtn.classList.add('_lock')
                            }
                            bigLosePopupsTeam.forEach((team) => {
                                const teamName = activeStage.querySelector(`[data-big-stage="bigWin"]`).querySelector(".stage__card-text");
                                const teamWrap = team.closest(".playoff__choose-team")
                                const isSelectedTeam = teamName.getAttribute('data-team') === team.getAttribute('data-team');
                                const isSelectedBigLose = JSON.parse(bigLose)?.dataAttr === team.getAttribute("data-team")

                                if(isSelectedBigLose){
                                    teamWrap.classList.remove('_open');
                                    teamWrap.classList.remove('_lock');
                                    teamWrap.classList.add('_selected');
                                }
                                if(isSelectedTeam){
                                    teamWrap.classList.add('hide');
                                }else{
                                    teamWrap.classList.remove('hide');
                                }
                            })
                            openPopup("bigLose", popupsWrap)
                        }

                        // вибір предікту на 3 0
                        if(bigWinPopup && popupsTeam){
                            if(clickedTeamName && popupsTeam){

                                let isSelectedBigWin = JSON.parse(bigWin) ?? false

                                if(isSelectedBigWin){
                                    sessionStorage.setItem("bigWinTemporary", bigWin)
                                }
                                let currentTeam = teams.find(team => team.dataAttr === clickedTeamName)
                                sessionStorage.setItem("bigWinTemporary", JSON.stringify(currentTeam))

                                allPopupsTeam.forEach((team) => {
                                    team.classList.remove('_selected')
                                    team.classList.add('_open')
                                })
                                popupsTeam.classList.add('_selected')
                                popupsTeam.classList.remove('_open')
                                if(sessionStorage.getItem("bigWinTemporary")){
                                    bigWinConfirmBtn.classList.remove('_lock')
                                }else{
                                    bigWinConfirmBtn.classList.add('_lock')
                                }

                            }
                        }

                        // вибір предікту на 0 3
                        if(bigLosePopup && popupsTeam){

                            if(clickedTeamName){

                                let isSelectedBigLose = JSON.parse(bigLose) ?? false

                                if(isSelectedBigLose){
                                    sessionStorage.setItem("bigLoseTemporary", bigLose)
                                }
                                let currentTeam = teams.find(team => team.dataAttr === clickedTeamName)
                                sessionStorage.setItem("bigLoseTemporary", JSON.stringify(currentTeam))

                                allPopupsTeam.forEach((team) => {
                                    team.classList.remove('_selected')
                                    team.classList.add('_open')
                                })

                                popupsTeam?.classList.add('_selected')
                                popupsTeam?.classList.remove('_open')
                                if(sessionStorage.getItem("bigLoseTemporary")){
                                    bigLoseConfirmBtn.classList.remove('_lock')
                                }else{
                                    bigLoseConfirmBtn.classList.add('_lock')
                                }
                            }
                        }

                        // відкриття попапу на інші команди
                        if(clickedCard && !cardBigWin && !cardBigLose){
                            const temoporaryTeams = sessionStorage.getItem("teamsWinTemporary");
                            const selectedTeams = teamsWin?.filter(item => item && item.dataAttr);
                            console.log(selectedTeams)
                            sessionStorage.removeItem("teamsWinTemporary")
                            if(selectedTeams && selectedTeams.length > 0){
                                sessionStorage.setItem("teamsWinTemporary", JSON.stringify(selectedTeams));
                            }
                            if(temoporaryTeams){
                                othersConfirmBtn.classList.remove('_lock');
                            }else{
                                othersConfirmBtn.classList.add('_lock');
                            }


                            othersPopupsTeam.forEach((team) => {
                                const teamDataAttr = team.getAttribute('data-team');
                                const teamWrap = team.closest(".playoff__choose-team");

                                const teamNameWin = activeStage.querySelector('[data-big-stage="bigWin"] .stage__card-text');
                                const teamNameLose = activeStage.querySelector('[data-big-stage="bigLose"] .stage__card-text');

                                const isSelectedTeam = selectedTeams?.some(item => item.dataAttr === teamDataAttr);
                                const isSelectedTeamWin = teamNameWin?.getAttribute('data-team') === teamDataAttr;
                                const isSelectedTeamLose = teamNameLose?.getAttribute('data-team') === teamDataAttr;

                                if (isSelectedTeam) {
                                    teamWrap.classList.remove('_open');
                                    teamWrap.classList.add('_selected');
                                }
                                if(selectedTeams?.length > 0 && !isSelectedTeam){
                                    teamWrap.classList.add('_lock');
                                }

                                if (isSelectedTeamWin || isSelectedTeamLose) {
                                    teamWrap.classList.add('hide');
                                }
                            });
                            if(activeOthers){
                                othersArray = Array.from(activeOthers);
                                indexCard = othersArray.indexOf(othersCard);
                                console.log(indexCard);
                            }

                            openPopup("Others", popupsWrap)
                        }

                        // закриття попапу на інші команди
                        if(popupsCloseBtn || !clickedCard && !popup ) {
                            closePopup(popupsWrap);
                        }

                        // вибір предікту на всі інші команди
                        if (OthersPopup && popupsTeam) {
                            // popupsTeam.classList.add('_selected');
                            // popupsTeam.classList.remove('_open');
                            if (clickedTeamName) {

                                let currentTeam = teams.find(team => team.dataAttr === clickedTeamName);

                                if (currentTeam) {
                                    let newPredict = JSON.parse(sessionStorage.getItem("teamsWinTemporary")) || [];

                                    const alreadyAdded = newPredict.some(item => item.dataAttr === currentTeam.dataAttr);
                                    const isPredictFull = newPredict.length >= 7;

                                    if (!alreadyAdded && !isPredictFull) {
                                        newPredict.push(currentTeam);
                                        sessionStorage.setItem("teamsWinTemporary", JSON.stringify(newPredict));
                                        console.log("✅ Added:", currentTeam);
                                        popupsTeam.classList.add('_selected');
                                        popupsTeam.classList.remove('_open');
                                    } else {
                                        newPredict = newPredict.filter(team => team.dataAttr !== currentTeam.dataAttr);
                                        sessionStorage.setItem("teamsWinTemporary", JSON.stringify(newPredict));
                                        console.log("⚠️ Team removed", currentTeam);
                                        popupsTeam.classList.remove('_selected');
                                        popupsTeam.classList.add('_open');
                                    }

                                    const updatedLength = newPredict.length;

                                    if (updatedLength < 7) {
                                        othersConfirmBtn.classList.add('_lock');
                                        allPopupsTeam.forEach(team => team.classList.remove('_lock'));
                                    } else if (updatedLength === 7) {
                                        othersConfirmBtn.classList.remove('_lock');
                                        allPopupsTeam.forEach(team => {
                                            if (team.classList.contains('_open')) {
                                                team.classList.add('_lock');
                                            }
                                        });
                                    }
                                } else {
                                    console.log("❌ Team not found for:", clickedTeamName);
                                }


                            }
                        }

                        // підтвердження вибору в попапі
                        if(confirmChooseBtn){

                            teamsWin = JSON.parse(sessionStorage.getItem("teamsWinTemporary"));
                            if(teamsWin) sessionStorage.setItem("teamsWin", JSON.stringify(teamsWin));

                            bigLose = sessionStorage.getItem("bigLoseTemporary");
                            if(bigLose) sessionStorage.setItem("bigLose", bigLose)

                            bigWin = sessionStorage.getItem("bigWinTemporary");
                            if(bigWin) sessionStorage.setItem("bigWin", bigWin)


                            const bigWinPredict = JSON.parse(bigWin)
                            const bigLosePredict = JSON.parse(bigLose)
                            const otherTeamsPredict = teamsWin;

                            if(bigLosePredict){
                                activeBigLose.classList.remove('_open')
                                activeBigLose.classList.add('_selected')
                                activeBigLoseTeam.textContent = translateKey(bigLosePredict.dataAttr)
                                activeBigLoseTeam.setAttribute('data-team', bigLosePredict.dataAttr)
                            }

                            if(bigWinPredict){
                                activeBigWin.classList.remove('_open')
                                activeBigWin.classList.add('_selected')
                                activeBigWinTeam.textContent = translateKey(bigWinPredict.dataAttr)
                                activeBigWinTeam.setAttribute('data-team', bigWinPredict.dataAttr)
                            }

                            if(otherTeamsPredict){
                                otherTeamsPredict.forEach((team, i) => {
                                    const currentCardTeamName = activeOthers[i].querySelector(".stage__card-text");
                                    // console.log(currentCardTeamName, team)

                                    activeOthers[i].classList.add('_selected')
                                    activeOthers[i].classList.remove('_open')

                                    currentCardTeamName.setAttribute('data-team', team.dataAttr)
                                    currentCardTeamName.textContent = translateKey(team.dataAttr)

                                })
                            }

                            if(teamsWin && bigWin && bigLose){
                                makePredictBtn.classList.remove('_lock');
                            }else{
                                makePredictBtn.classList.add('_lock');
                            }

                            closePopup(popupsWrap);
                        }

                        if(teamsWin && bigWin && bigLose){
                            makePredictBtn.classList.remove('_lock');
                        }else{
                            makePredictBtn.classList.add('_lock');
                        }
                    }else{
                        // закриття попапу на інші команди

                        const clickedTab = target.closest(".playoff__choose-team")
                        const clickedCard = target.closest(".playoff__card")

                        if(popupsCloseBtn || !clickedTab && !popup && !clickedCard) {
                            closePopup(popupsWrap);
                        }

                    }

                })

                if(currentStage < 3){
                    playoffPredictor.classList.add('_lock');
                }else{
                    updatePlayoffPosition();
                }
            })

            makePredictBtn.addEventListener('click',()=>{
                sendPredict()
            })

            setTimeout(hideLoader, 1000)

            let initialOffsetLeft = null;

            const updatePlayoffPosition = () => {
                setTimeout(() =>{
                    if (window.innerWidth <= 1300 && window.innerWidth > 550) {
                        playoffStage.style.transform = "";
                        initialOffsetLeft = playoffStage.getBoundingClientRect().left;
                        const currentLeft = initialOffsetLeft
                        const shift = currentLeft - 10;
                        playoffStage.style.transform = `translateX(-${shift}px)`;
                    } else {
                        playoffStage.style.transform = "";
                        initialOffsetLeft = null;
                    }
                }, 10)

            };

            window.addEventListener("orientationchange", updatePlayoffPosition);
            window.addEventListener("resize", updatePlayoffPosition);

            const playoffPhases = document.querySelectorAll('.playoff__stage');
            const playoffContainer = document.querySelector('.playoff');
            const playoffNext = document.querySelector('.playoff__btn-right');
            const playoffPrev = document.querySelector('.playoff__btn-left');

            let phaseCount = 3;
            let isMobile = window.innerWidth <= 550;

            const setCurrentPhase = (phases, current) => {
                phases.forEach((phase, i) => {
                    phase.classList.toggle("hide", i !== current);
                });
            };

            const showAllPhases = (phases) => {
                phases.forEach(phase => phase.classList.remove("hide"));
            };

            const hideAllExceptCurrent = () => {
                setCurrentPhase(playoffPhases, phaseCount);
            };

            const handleNext = () => {
                phaseCount = (phaseCount + 1) % playoffPhases.length;
                hideAllExceptCurrent();
            };

            const handlePrev = () => {
                phaseCount = (phaseCount - 1 + playoffPhases.length) % playoffPhases.length;
                hideAllExceptCurrent();
            };

            let touchStartX = 0;
            let touchEndX = 0;

            const handleSwipe = () => {
                const diff = touchEndX - touchStartX;

                if (Math.abs(diff) > 50) {
                    if (diff < 0) {
                        handleNext();
                    } else {
                        handlePrev();
                    }
                }
            };

            if (isMobile) {
                hideAllExceptCurrent();
                playoffNext.addEventListener('click', handleNext);
                playoffPrev.addEventListener('click', handlePrev);

                playoffContainer.addEventListener('touchstart', (e) => {
                    touchStartX = e.changedTouches[0].screenX;
                });

                playoffContainer.addEventListener('touchend', (e) => {
                    touchEndX = e.changedTouches[0].screenX;
                    handleSwipe();
                });
            }

            window.addEventListener('resize', () => {
                const nowMobile = window.innerWidth <= 550;

                if (nowMobile && !isMobile) {
                    isMobile = true;
                    hideAllExceptCurrent();
                    playoffNext.addEventListener('click', handleNext);
                    playoffPrev.addEventListener('click', handlePrev);
                }

                if (!nowMobile && isMobile) {
                    isMobile = false;
                    showAllPhases(playoffPhases);
                    playoffNext.removeEventListener('click', handleNext);
                    playoffPrev.removeEventListener('click', handlePrev);
                }
            });

        }

        const waitForUserId = new Promise((resolve) => {
            const interval = setInterval(() => {
                tryDetectUserId();
                if (userId || attempts >= maxAttempts) {
                    quickCheckAndRender();
                    clearInterval(interval);
                    resolve();
                }
                attempts++;
            }, attemptInterval);
        });

        await waitForUserId;
    }

    function loadTranslations() {
        return request(`/new-translates/${locale}`)
            .then(json => {
                i18nData = json;
                translate();
                const targetNode = document.getElementById("click-pick");
                const mutationObserver = new MutationObserver(function (mutations) {
                    mutationObserver.disconnect();
                    translate();
                    mutationObserver.observe(targetNode, { childList: true, subtree: true });
                });
                mutationObserver.observe(targetNode, {
                    childList: true,
                    subtree: true
                });

            });
    }

    loadTranslations().then(init)

    //test

    document.querySelector('.dark-btn').addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });

    const lngBtn = document.querySelector(".btn-lng")

    lngBtn.addEventListener("click", () => {
        if (sessionStorage.getItem("locale")) {
            sessionStorage.removeItem("locale");
        } else {
            sessionStorage.setItem("locale", "uk");
        }
        window.location.reload();
    });


    const authBtn = document.querySelector(".btn-auth")

    authBtn.addEventListener("click", () =>{
        if(userId){
            sessionStorage.removeItem("userId")
        }else{
            sessionStorage.setItem("userId", "77777779")
        }
        window.location.reload()
    });

    document.addEventListener("DOMContentLoaded", () => {
        document.querySelector(".menu-btn")?.addEventListener("click", () => {
            document.querySelector(".menu-test")?.classList.toggle("hide");
        });
    });

    const overlay = document.querySelector('.popups');
    const popupWin = document.querySelector('.win-popup');
    const popupLose = document.querySelector('.lose-popup');
    const popupOther = document.querySelector('.others-popup');

    console.log(popupWin.querySelector(".playoff__popup-close"))

    // function setHidePopup(popup){
    //     console.log(popup.querySelector(".playoff__popup-close"));
    //     const closeBtn = popup.querySelector('.playoff__popup-close');
    //
    //     closeBtn.addEventListener('click', () =>{
    //         overlay.classList.add('overlay-opacity');
    //         popup.classList.add("hide")
    //     });
    // }
    //
    // setHidePopup(popupWin);
    // setHidePopup(popupLose);
    // setHidePopup(popupOther);


    document.querySelector('.btn-popup-win').addEventListener('click', () =>{
        overlay.classList.remove('overlay-opacity');
        popupWin.classList.remove('hide');
        popupLose.classList.add('hide');
        popupOther.classList.add('hide');
    })

    document.querySelector('.btn-popup-lose').addEventListener('click', () =>{
        overlay.classList.remove('overlay-opacity');
        popupWin.classList.add('hide');
        popupLose.classList.remove('hide');
        popupOther.classList.add('hide');
    })

    document.querySelector('.btn-popup-other').addEventListener('click', () =>{
        overlay.classList.remove('overlay-opacity');
        popupWin.classList.add('hide');
        popupLose.classList.add('hide');
        popupOther.classList.remove('hide');
    })

    document.querySelector('.btn-timer')?.addEventListener('click', () => {
        const stage1 = '1'
        const stage2 = '4'

        const savedDate = sessionStorage.getItem("currentDate");

        const newDate = savedDate === stage2 ? stage1 : stage2;
        sessionStorage.setItem("currentDate", newDate);

        location.reload();
    });


})();
