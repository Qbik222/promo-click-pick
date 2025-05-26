(function () {

    const apiURL = 'https://fav-prom.com/api_click_pick'

    const stagesData = [
        { data: new Date("2025-05-20T00:00:00+03:00") },
        { data: new Date("2025-05-25T00:00:00+03:00") },
        { data: new Date("2025-05-30T00:00:00+03:00") },
        { data: new Date("2025-06-05T00:00:00+03:00") }
    ];

    const currentDate = new Date("2025-04-05T00:00:00+03:00");

    // let currentStage = stagesData.filter(stage => stage.data <= currentDate).length ?? 3;

    let currentStage = Number(sessionStorage.getItem("currentDate"))

    console.log(currentStage);

    const mainPage = document.querySelector(".fav-page"),
        unauthMsgs = document.querySelectorAll('.unauth-msg'),
        participateBtns = document.querySelectorAll('.part-btn'),
        redirectBtns = document.querySelectorAll('.btn-join'),
        loader = document.querySelector(".spinner-overlay"),
        stages = document.querySelectorAll("[data-stage]"),
        stagesTabs = document.querySelectorAll("[data-stage-tab]"),
        playoffStage = document.querySelector(".playoff"),
        results = document.querySelector(".results"),
        predictor = document.querySelector(".predictor"),
        playoffPredictor = predictor.querySelector(".playoff"),
        teamTextPopups = document.querySelectorAll('.playoff__choose-team-text')
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

    let bigLose = null
    let bigWin = null

    const teamsWin = [];

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



    let loaderBtn = false

    let locale = sessionStorage.getItem("locale") ?? "en"

    if (ukLeng) locale = 'uk';
    if (enLeng) locale = 'en';

    let debug = true

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
            }else{
                if(bigWinTeam.outcome){
                    stageCardWin.classList.add('_win');
                }else{
                    stageCardWin.classList.add('_lose');
                }
                if(bigLoseTeam.outcome){
                    stageCardWin.classList.add('_win');
                }else{
                    stageCardWin.classList.add('_lose');
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

    function participate() {
        if (!userId) {
            return;
        }
        const params = { userid: userId };
        fetch(apiURL + '/user/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(params)
        }).then(res => res.json())
            .then(res => {
                loaderBtn = true
                toggleClasses(participateBtns, "loader")
                toggleTranslates(participateBtns, "loader")
                setTimeout(() =>{
                    toggleTranslates(participateBtns, "loader_ready")
                    toggleClasses(participateBtns, "done")
                    toggleClasses(participateBtns, "loader")
                }, 500)
                setTimeout(()=>{
                    checkUserAuth()
                }, 1000)

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
            checkUserAuth();
            request('/stage/').then((res) => {
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
                    });
                });
            })

            renderTeamBlocks('bigWin', teams);
            renderTeamBlocks('bigLose', teams);
            renderTeamBlocks('Others', teams);

            setTimeout(hideLoader, 1000)



            // console.log(playoffStage.getBoundingClientRect().left - 10)


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

            if(currentStage < 3){
                playoffPredictor.classList.add('_lock');
            }else{
                updatePlayoffPosition();
            }



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

    function setHidePopup(popup){
        console.log(popup.querySelector(".playoff__popup-close"));
        const closeBtn = popup.querySelector('.playoff__popup-close');

        closeBtn.addEventListener('click', () =>{
            overlay.classList.add('overlay-opacity');
            popup.classList.add("hide")
        });
    }

    setHidePopup(popupWin);
    setHidePopup(popupLose);
    setHidePopup(popupOther);


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
