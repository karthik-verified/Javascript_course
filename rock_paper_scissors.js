 let user_choice = 'Rock';
        
        let result = 'Win';

        let counter = JSON.parse(localStorage.getItem('score')) || {
            wins : 0,
            losses : 0,
            tie : 0
        };
        update_score(result);

        function win_counter (result) {
            if (result==='Win') {
            counter.wins +=1;
        } else if(result==='Loss') {
            counter.losses +=1;
        } else if (result==='Tie') {
            counter.tie +=1;
        }
        }
        
        function chosen_moves(user_choice,comp_choice) {
            document.querySelector('.your_choice').innerHTML = `<img src="${user_choice}-emoji.png" height="50px" width="50px">`;
            document.querySelector('.comp_choice').innerHTML = `<img src="${comp_choice}-emoji.png" height="50px" width="50px">`;
        }
        function game_result(result) {
            if (result==='Win') {
                document.querySelector('.js-win_or_lose').innerHTML = `You have Won !`;
            } else if (result==='Loss') {
                document.querySelector('.js-win_or_lose').innerHTML = `You have Lost `;
            } else if (result==='Tie') {
                document.querySelector('.js-win_or_lose').innerHTML = `It is a Tie `;
            }else {
                document.querySelector('.js-win_or_lose').innerHTML = `You have ? `;
            }
        }
        
        
        function comp_choice_generator() {
            const number = Math.random();
            let comp_choice = 'rock';
            if (number>0 && number<1/3) {
                comp_choice = 'Rock';
            } else if(number>1/3 && number<2/3) {
                comp_choice = 'Paper';
            } else {
                comp_choice = 'Scissors';
            }
            return comp_choice;
        }

        function human_choice_generator() {
            const number = Math.random();
            let human_choice = 'rock';
            if (number>0 && number<1/3) {
                human_choice = 'Rock';
            } else if(number>1/3 && number<2/3) {
                human_choice = 'Paper';
            } else {
                human_choice = 'Scissors';
            }
            return human_choice;
        }
        
        function win_checker(user_choice,comp_choice) {
            let result = 'Win'
            if(user_choice==='Rock') {
                if(comp_choice==='Rock') {
                    result = 'Tie';
                } else if (comp_choice==='Paper') {
                    result = 'Loss';
                } else if (comp_choice==='Scissors') {
                    result = 'Win';
                }
            }
           else if(user_choice==='Paper') {
                if(comp_choice==='Rock') {
                    result = 'Win';
                } else if (comp_choice==='Paper') {
                    result = 'Tie';
                } else if (comp_choice==='Scissors') {
                    result = 'Loss';
                }
            }
           else if(user_choice==='Scissors') {
                if(comp_choice==='Rock') {
                    result = 'Loss';
                } else if (comp_choice==='Paper') {
                    result = 'Win';
                } else if (comp_choice==='Scissors') {
                    result = 'Tie';
                }
            
            }
            return result;
        }
        

        function update_score() {
            document.querySelector('.js-score').innerHTML = `Wins : ${counter.wins} , Losses : ${counter.losses} , Ties : ${counter.tie}`;
        }

        let autoPlayInterval;
        let is_playing = false;
        
        function auto_play() {
            if (!is_playing) {
                if (autoPlayInterval) return; // Prevent multiple intervals

                autoPlayInterval = setInterval(function() {
                    const user_choice = comp_choice_generator();
                    const comp_choice = comp_choice_generator();
                    const result = win_checker(user_choice, comp_choice);
                    
                    win_counter(result);
                    localStorage.setItem('score', JSON.stringify(counter));
                    update_score();
                    game_result(result);
                    chosen_moves(user_choice, comp_choice);
                }, 1000);
                is_playing = true;
            } else {
                clearInterval(autoPlayInterval);
                is_playing = false;
            }
            
        }

        let js_button_rock  = document.querySelector('.js_button_rock');

        js_button_rock.addEventListener('click',function(){
            let comp_choice = comp_choice_generator();
            user_choice = 'Rock';
            let result = win_checker(user_choice,comp_choice);

            win_counter(result);
            localStorage.setItem('score',JSON.stringify(counter));
            update_score();
            game_result(result);
            chosen_moves(user_choice,comp_choice);
        });

        let js_button_paper = document.querySelector('.js_button_paper');

        js_button_paper.addEventListener('click', function() {
            let comp_choice = comp_choice_generator();
            user_choice = 'Paper';
            let result = win_checker(user_choice,comp_choice);

            win_counter(result);
            localStorage.setItem('score',JSON.stringify(counter));
            update_score();
            game_result(result);
            chosen_moves(user_choice,comp_choice);
        });

        let js_button_scissors = document.querySelector('.js_button_scissors');

        js_button_scissors.addEventListener('click' , function() {
            let comp_choice = comp_choice_generator();
            user_choice = 'Scissors';
            let result = win_checker(user_choice,comp_choice); 

            win_counter(result);
            localStorage.setItem('score',JSON.stringify(counter));
            update_score();
            game_result(result);
            chosen_moves(user_choice,comp_choice);
        });

        document.body.addEventListener('keydown', function(event) {
            if(event.key==='r') {
                let comp_choice = comp_choice_generator();
                user_choice = 'Rock';
                let result = win_checker(user_choice,comp_choice);

                win_counter(result);
                localStorage.setItem('score',JSON.stringify(counter));
                update_score();
                game_result(result);
                chosen_moves(user_choice,comp_choice);
            } else if(event.key==='p') {
                let comp_choice = comp_choice_generator();
                user_choice = 'Paper';
                let result = win_checker(user_choice,comp_choice);

                win_counter(result);
                localStorage.setItem('score',JSON.stringify(counter));
                update_score();
                game_result(result);
                chosen_moves(user_choice,comp_choice);
            }else if (event.key==='s') {
                let comp_choice = comp_choice_generator();
                user_choice = 'Scissors';
                let result = win_checker(user_choice,comp_choice); 

                win_counter(result);
                localStorage.setItem('score',JSON.stringify(counter));
                update_score();
                game_result(result);
                chosen_moves(user_choice,comp_choice);
            }
        })

        let entered = true;
        document.body.addEventListener('keydown', function(event) {
            if(event.key==='c') {
                if(entered){
                document.body.classList.add('after_entered');
                entered = false;
                }else {
                    document.body.classList.remove('after_entered');
                    entered = true;
                }
            }
        })