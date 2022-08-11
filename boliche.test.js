const {createMarcador,validateStrike, validateSpare, validateScore, validateStrikeInLastShot} = require('./funcionesTest');
test('Create new scoreboard', () => {
    const scoreboard = [
        {
            tiro1: 0,
            tiro2: 0,
            resultado: 0
        },
        {
            tiro1: 0,
            tiro2: 0,
            resultado: 0
        },
        {
            tiro1: 0,
            tiro2: 0,
            resultado: 0
        },
        {
            tiro1: 0,
            tiro2: 0,
            resultado: 0
        },
        {
            tiro1: 0,
            tiro2: 0,
            resultado: 0
        },
        {
            tiro1: 0,
            tiro2: 0,
            resultado: 0
        },
        {
            tiro1: 0,
            tiro2: 0,
            resultado: 0
        },
        {
            tiro1: 0,
            tiro2: 0,
            resultado: 0
        },
        {
            tiro1: 0,
            tiro2: 0,
            resultado: 0
        },
        {
            tiro1: 0,
            tiro2: 0,
            tiro3: 0,
            resultado: 0
        },
    ]
    expect(createMarcador()).toStrictEqual(scoreboard);
  });

test('strike validation', ()=> {
    expect(validateStrike()).toBeTruthy()    
})
test('spare validation', ()=> {
    expect(validateSpare()).toBe(15)    
})
test('score validation', ()=> {
    expect(validateScore()).toBe(9)    
})
test('strike in last shot validation', ()=> {
    expect(validateStrikeInLastShot()).toBe(10)    
})


