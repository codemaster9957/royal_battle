controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f b b b b f f . . . . 
        . . . f b b b f f b b b f . . . 
        . . f f f f f c c f f f f f . . 
        . . f f b c b c c b c b f f . . 
        . . f b c f c f f c f c b f . . 
        . . f f f c c b b c c f f f . . 
        . f f b f c f b b f c f b f f . 
        . f b b f f b b b b f b b b f . 
        . . f b b b b b b b b b b f . . 
        . . . f b b b b b b b b f . . . 
        . . b a f f f f f f f f a b . . 
        . . a d f c c c c c c f d a . . 
        . . a a f a a a a a a f a a . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f b b b b f f . . . . 
        . . . f b b b f f b b b f . . . 
        . . . f f f f c c f f f f . . . 
        . . f f b c b c c b c b f f . . 
        . . f b c f c f f f c f b f . . 
        . . f f f c f b b c c f f f . . 
        . . f b c f f b b c f b b f . . 
        . f f b f f b b b f b b b f f . 
        . f f b b b b b b b b b b f f . 
        . . . f b b b b b b b b f . . . 
        . . . b f f f f f f f f a b . . 
        . . . a f c c c c c b d d a . . 
        . . . b f f f f f f b b a . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f b b b b f f . . . . 
        . . . f b b b f f b b b f . . . 
        . . f f f f f c c f f f f f . . 
        . . f f b c b c c b c b f f . . 
        . . f b c f c f f c f c b f . . 
        . . f f f c c b b c c f f f . . 
        . f f b f c f b b f c f b f f . 
        . f b b f f b b b b f b b b f . 
        . . f b b b b b b b b b b f . . 
        . . . f b b b b b b b b f . . . 
        . . b a f f f f f f f f a b . . 
        . . a d f c c c c c c f d a . . 
        . . a a f a a a a a a f a a . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f b b b b f f . . . . 
        . . . f b b b f f b b b f . . . 
        . . . f f f f c c f f f f . . . 
        . . f f b c b c c b c b f f . . 
        . . f b f c f f f c f c b f . . 
        . . f f f c c b b f c f f f . . 
        . . f b b f c b b f f c b f . . 
        . f f b b b f b b b f f b f f . 
        . f f b b b b b b b b b b f f . 
        . . . f b b b b b b b b f . . . 
        . . b a f f f f f f f f b . . . 
        . . a d d b c c c c c f a . . . 
        . . . a b b f f f f f f b . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    true
    )
    characterAnimations.setCharacterState(mySprite, characterAnimations.rule(Predicate.FacingUp, Predicate.MovingUp))
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (item <= 8) {
        if (item == 8) {
            item = 0
            info.setScore(0)
        }
        item += 1
        info.changeScoreBy(1)
    }
})
controller.combos.attachCombo("a+B", function () {
    mySprite5 = 6
    controller.moveSprite(mySprite, 0, 0)
    mySprite.setFlag(SpriteFlag.Invisible, true)
    statusbar.setFlag(SpriteFlag.Invisible, true)
    tiles.setCurrentTilemap(tilemap`level2`)
    if (info.score() == 1) {
        mySprite2 = sprites.create(img`
            ................................
            ...........fffffffffff..........
            .........ff11111111111ff........
            .......ff111111111111bb1ff......
            ......f11ffffff1bbbbbbbbbbf.....
            .....f1bbbb141fb9b99999999bf....
            ....f1bcaaab12fb9b666666999bf...
            ...f11bccaab12f1bbbbbbb6666b1f..
            ...f11bccccb1ff11111111bbbb1ff..
            ..f111bccccbff111111111bfffff.f.
            ..f1111bbbbff11111111ffff.....f.
            .f2fffffffff111111ffff.........f
            .f2222222222ff1fff.............f
            .f22bbbbbb2222f................f
            .f22bcccccb222f................f
            .f2bcbbbbb2222f................f
            .f2bcbcb222222f................f
            .f2bcbbb22222ff................f
            .f2bbb2222ffff.................f
            .fff22ffff.ff..................f
            .f.fffff.......................f
            .f.............................f
            ..f...........................f.
            ..f...........................f.
            ...f.........................f..
            ...f.........................f..
            ....f.......................f...
            .....f.....................f....
            ......f...................f.....
            .......ff...............ff......
            .........ff...........ff........
            ...........fffffffffff..........
            `, SpriteKind.Player)
    }
    if (info.score() == 2) {
        mySprite2 = sprites.create(img`
            ................................
            ...........fffffffffff..........
            .........ff11111111111ff........
            .......ff111111111111bb1ff......
            ......f22ffffff1bbbbbbbbbbf.....
            .....f2bbbb242fb9b99999999bf....
            ....f2bcaaab22fb9b666666999bf...
            ...f22bccaab22f1bbbbbbb6666b1f..
            ...f22bccccb2ff11111111bbbb1ff..
            ..f222bccccbff111111111bfffff.f.
            ..f2222bbbbff11111111ffff.....f.
            .f1fffffffff111111ffff.........f
            .f1111111111ff1fff.............f
            .f11bbbbbb1111f................f
            .f11bcccccb111f................f
            .f1bcbbbbb1111f................f
            .f1bcbcb111111f................f
            .f1bcbbb11111ff................f
            .f1bbb1111ffff.................f
            .fff11ffff.ff..................f
            .f.fffff.......................f
            .f.............................f
            ..f...........................f.
            ..f...........................f.
            ...f.........................f..
            ...f.........................f..
            ....f.......................f...
            .....f.....................f....
            ......f...................f.....
            .......ff...............ff......
            .........ff...........ff........
            ...........fffffffffff..........
            `, SpriteKind.Player)
    }
    if (info.score() == 3) {
        mySprite2 = sprites.create(img`
            ................................
            ...........fffffffffff..........
            .........ff22222222222ff........
            .......ff222222222222bb2ff......
            ......f11ffffff2bbbbbbbbbbf.....
            .....f1bbbb141fb9b99999999bf....
            ....f1bcaaab12fb9b666666999bf...
            ...f11bccaab12f2bbbbbbb6666b2f..
            ...f11bccccb1ff22222222bbbb2ff..
            ..f111bccccbff222222222bfffff.f.
            ..f1111bbbbff22222222ffff.....f.
            .f1fffffffff222222ffff.........f
            .f1111111111ff2fff.............f
            .f11bbbbbb1111f................f
            .f11bcccccb111f................f
            .f1bcbbbbb1111f................f
            .f1bcbcb111111f................f
            .f1bcbbb11111ff................f
            .f1bbb1111ffff.................f
            .fff11ffff.ff..................f
            .f.fffff.......................f
            .f.............................f
            ..f...........................f.
            ..f...........................f.
            ...f.........................f..
            ...f.........................f..
            ....f.......................f...
            .....f.....................f....
            ......f...................f.....
            .......ff...............ff......
            .........ff...........ff........
            ...........fffffffffff..........
            `, SpriteKind.Player)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (item == 1) {
        if (statusbar2.value >= 1) {
            if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.MovingUp, Predicate.FacingUp))) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . b . . . . . . . . . 
                    . . . . . b f b . . . . . . . . 
                    . . . . . . b . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, 0, -400)
                statusbar2.value += -1
            }
            if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.MovingDown, Predicate.FacingDown))) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . b . . . . . . . . . 
                    . . . . . b f b . . . . . . . . 
                    . . . . . . b . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, 0, 400)
                statusbar2.value += -1
            }
            if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingLeft))) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . b . . . . . . . . . 
                    . . . . . b f b . . . . . . . . 
                    . . . . . . b . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, -400, 0)
                statusbar2.value += -1
            }
            if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingRight, Predicate.MovingRight))) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . b . . . . . . . . . 
                    . . . . . b f b . . . . . . . . 
                    . . . . . . b . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, 400, 0)
                statusbar2.value += -1
            }
        }
    }
    if (item == 2) {
        if (statusbar2.value <= 10) {
            if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingUp, Predicate.MovingUp))) {
                projectile2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . f . . . 
                    . . . . . . . . . . f f . f . . 
                    . . . . . . . . f f . . . . f . 
                    . . . . . . . f f f f . . . . f 
                    . . . . . . f c c b b f . . . f 
                    . . . . . f c c c b b b f . . f 
                    . . . . . f c c c c b b f . . 2 
                    . . . . . f c c c c c c f . . 4 
                    . . . . . f c c c c c c f . . 5 
                    . . . . . . f c c c c f . . . . 
                    . . . . . . . f f f f . . . . . 
                    `, mySprite, 0, -150)
                animation.runImageAnimation(
                projectile2,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . f . . . 
                    . . . . . . . . . . f f . f . . 
                    . . . . . . . . f f . . . . f . 
                    . . . . . . . f f f f . . . . f 
                    . . . . . . f c c b b f . . . f 
                    . . . . . f c c c b b b f . . f 
                    . . . . . f c c c c b b f . . 2 
                    . . . . . f c c c c c c f . . 4 
                    . . . . . f c c c c c c f . 2 5 
                    . . . . . . f c c c c f . 2 . . 
                    . . . . . . . f f f f . . . 2 . 
                    `,img`
                    . . . . . . . . f f 2 4 5 f . . 
                    . . . . . . . f . . . 2 . 2 . . 
                    . . . . . . f . . . . . 2 . . . 
                    . . . . . f . . . . f f f f . . 
                    . . . . . . f . . f b b c c f . 
                    . . . . . . f . f b b b c c c f 
                    . . . . . . . f f b b c c c c f 
                    . . . . . . . f f c c c c c c f 
                    . . . . . . . . f c c c c c c f 
                    . . . . . . . . . f c c c c f . 
                    . . . . . . . . . . f f f f . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . f f f f . . . . . . . 
                    . . . . f c c c c f . . . . . . 
                    f . . f c c c c c c f . . . . . 
                    f . . f c c c c c c f . . . . . 
                    5 . . f b b c c c c f . . . . . 
                    4 . . f b b b c c c f . . . . . 
                    4 2 2 . f b b c c f . . . . . . 
                    2 . . 2 . f f f f . . . . . . . 
                    . f . . . . f f . . . . . . . . 
                    . . f . f f . . . . . . . . . . 
                    . . . f . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . f f f f . . . . . . . . . . 
                    . f c c c c f . . . . . . . . . 
                    f c c c c c c f . . . . . . . . 
                    f c c c c c c f f . . . . . . . 
                    f c c c c b b f f . . . . . . . 
                    f c c c b b b f . f . . . . . . 
                    . f c c b b f . . f . . . . . . 
                    . . f f f f . . . . 2 . . . . . 
                    . . . . . . . . . 4 . 2 . . . . 
                    . . . . . . . . 5 . 2 2 . . . . 
                    . . f f f f f f . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . 2 . . . f . . . 
                    . . . . . . . . . 2 4 5 . f . . 
                    . . . . . . . . f 2 . . . . f . 
                    . . . . . . . f f f f . . . . f 
                    . . . . . . f c c b b f . . . f 
                    . . . . . f c c c b b b f . . f 
                    . . . . . f c c c c b b f . . f 
                    . . . . . f c c c c c c f . . f 
                    . . . . . f c c c c c c f . . f 
                    . . . . . . f c c c c f . . . . 
                    . . . . . . . f f f f . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . f . . . 
                    . . . . . . . . . . 5 f . f . . 
                    . . . . . . . . f 4 . . . . f . 
                    . . . . . . . f 2 2 2 . . . . f 
                    . . . . . . f c c 2 b f . . . f 
                    . . . . . f c c c b b b f . . f 
                    . . . . . f c c c c b b f . . f 
                    . . . . . f c c c c c c f . . f 
                    . . . . . f c c c c c c f . . f 
                    . . . . . . f c c c c f . . . . 
                    . . . . . . . f f f f . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . 4 4 4 . . 4 4 . 
                    . . . . . . . 4 4 2 2 4 4 2 4 . 
                    . . 4 4 4 4 4 2 2 5 5 2 2 2 4 . 
                    . . 4 2 2 2 4 2 5 5 5 5 5 2 4 . 
                    . . 4 2 5 5 2 5 5 5 5 5 5 2 4 . 
                    . . 4 4 2 5 5 5 5 5 5 5 5 2 4 . 
                    . . . 4 2 5 5 5 5 5 5 5 2 4 . . 
                    . . 4 2 5 5 5 5 5 5 5 5 2 4 . . 
                    . . 4 4 2 2 2 2 2 2 5 2 4 4 . . 
                    . . . 4 4 4 4 4 4 4 2 4 . . . . 
                    . . . . 4 . . . . . 4 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 4 4 4 . . . 4 . . . 
                    . . . . . 4 4 2 2 4 4 4 4 4 . . 
                    . . . . 4 4 2 5 5 2 2 2 2 4 . . 
                    . . . 4 4 2 5 5 5 5 5 5 2 4 4 . 
                    . . . 4 2 5 5 5 5 5 5 5 5 2 2 4 
                    . 4 4 4 2 5 5 5 5 5 5 5 5 5 2 4 
                    . 4 4 2 5 5 5 5 5 5 5 5 5 5 2 4 
                    . 4 4 2 5 5 5 5 5 5 5 5 5 5 2 4 
                    . 4 4 2 5 5 5 5 5 5 5 5 5 2 4 . 
                    . 4 2 2 5 5 5 5 5 5 5 5 2 4 . . 
                    . 4 4 2 2 2 2 5 5 5 2 2 2 4 . . 
                    . 4 4 4 4 4 4 2 5 2 4 4 4 4 . . 
                    . . . . . 4 4 2 2 4 . . 4 4 . . 
                    . . . . 4 4 4 4 4 . . . 4 . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . 4 4 . . 
                    . . . . . . . . . 4 4 4 4 4 4 . 
                    . . 4 4 4 4 4 4 4 2 2 2 2 2 4 . 
                    . 4 4 2 2 2 2 2 2 5 5 5 5 2 4 . 
                    4 2 2 5 5 5 5 5 5 5 5 5 5 2 4 . 
                    4 2 5 5 5 5 5 5 5 5 5 5 5 2 4 . 
                    4 4 2 5 5 5 5 5 5 5 5 5 5 2 4 4 
                    . 4 4 2 5 5 5 5 5 5 5 5 5 5 2 4 
                    4 2 2 5 5 5 5 5 5 5 5 5 5 5 2 4 
                    4 2 5 5 5 5 5 5 5 5 5 5 5 2 4 4 
                    4 2 5 5 5 5 5 5 5 5 5 5 5 2 4 . 
                    4 4 2 5 5 5 5 5 5 5 5 5 2 4 4 . 
                    . 4 4 2 2 5 2 2 2 5 2 5 2 4 4 . 
                    . . 4 4 4 2 4 4 4 2 4 2 4 . . . 
                    . . . . 4 4 4 . 4 4 4 4 . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                75,
                false
                )
                statusbar2.value += -10
            }
            if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingDown, Predicate.MovingDown))) {
                projectile2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . f . . . 
                    . . . . . . . . . . f f . f . . 
                    . . . . . . . . f f . . . . f . 
                    . . . . . . . f f f f . . . . f 
                    . . . . . . f c c b b f . . . f 
                    . . . . . f c c c b b b f . . f 
                    . . . . . f c c c c b b f . . 2 
                    . . . . . f c c c c c c f . . 4 
                    . . . . . f c c c c c c f . . 5 
                    . . . . . . f c c c c f . . . . 
                    . . . . . . . f f f f . . . . . 
                    `, mySprite, 0, 150)
                animation.runImageAnimation(
                projectile2,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . f . . . 
                    . . . . . . . . . . f f . f . . 
                    . . . . . . . . f f . . . . f . 
                    . . . . . . . f f f f . . . . f 
                    . . . . . . f c c b b f . . . f 
                    . . . . . f c c c b b b f . . f 
                    . . . . . f c c c c b b f . . 2 
                    . . . . . f c c c c c c f . . 4 
                    . . . . . f c c c c c c f . 2 5 
                    . . . . . . f c c c c f . 2 . . 
                    . . . . . . . f f f f . . . 2 . 
                    `,img`
                    . . . . . . . . f f 2 4 5 f . . 
                    . . . . . . . f . . . 2 . 2 . . 
                    . . . . . . f . . . . . 2 . . . 
                    . . . . . f . . . . f f f f . . 
                    . . . . . . f . . f b b c c f . 
                    . . . . . . f . f b b b c c c f 
                    . . . . . . . f f b b c c c c f 
                    . . . . . . . f f c c c c c c f 
                    . . . . . . . . f c c c c c c f 
                    . . . . . . . . . f c c c c f . 
                    . . . . . . . . . . f f f f . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . f f f f . . . . . . . 
                    . . . . f c c c c f . . . . . . 
                    f . . f c c c c c c f . . . . . 
                    f . . f c c c c c c f . . . . . 
                    5 . . f b b c c c c f . . . . . 
                    4 . . f b b b c c c f . . . . . 
                    4 2 2 . f b b c c f . . . . . . 
                    2 . . 2 . f f f f . . . . . . . 
                    . f . . . . f f . . . . . . . . 
                    . . f . f f . . . . . . . . . . 
                    . . . f . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . f f f f . . . . . . . . . . 
                    . f c c c c f . . . . . . . . . 
                    f c c c c c c f . . . . . . . . 
                    f c c c c c c f f . . . . . . . 
                    f c c c c b b f f . . . . . . . 
                    f c c c b b b f . f . . . . . . 
                    . f c c b b f . . f . . . . . . 
                    . . f f f f . . . . 2 . . . . . 
                    . . . . . . . . . 4 . 2 . . . . 
                    . . . . . . . . 5 . 2 2 . . . . 
                    . . f f f f f f . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . 2 . . . f . . . 
                    . . . . . . . . . 2 4 5 . f . . 
                    . . . . . . . . f 2 . . . . f . 
                    . . . . . . . f f f f . . . . f 
                    . . . . . . f c c b b f . . . f 
                    . . . . . f c c c b b b f . . f 
                    . . . . . f c c c c b b f . . f 
                    . . . . . f c c c c c c f . . f 
                    . . . . . f c c c c c c f . . f 
                    . . . . . . f c c c c f . . . . 
                    . . . . . . . f f f f . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . f . . . 
                    . . . . . . . . . . 5 f . f . . 
                    . . . . . . . . f 4 . . . . f . 
                    . . . . . . . f 2 2 2 . . . . f 
                    . . . . . . f c c 2 b f . . . f 
                    . . . . . f c c c b b b f . . f 
                    . . . . . f c c c c b b f . . f 
                    . . . . . f c c c c c c f . . f 
                    . . . . . f c c c c c c f . . f 
                    . . . . . . f c c c c f . . . . 
                    . . . . . . . f f f f . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . 4 4 4 . . 4 4 . 
                    . . . . . . . 4 4 2 2 4 4 2 4 . 
                    . . 4 4 4 4 4 2 2 5 5 2 2 2 4 . 
                    . . 4 2 2 2 4 2 5 5 5 5 5 2 4 . 
                    . . 4 2 5 5 2 5 5 5 5 5 5 2 4 . 
                    . . 4 4 2 5 5 5 5 5 5 5 5 2 4 . 
                    . . . 4 2 5 5 5 5 5 5 5 2 4 . . 
                    . . 4 2 5 5 5 5 5 5 5 5 2 4 . . 
                    . . 4 4 2 2 2 2 2 2 5 2 4 4 . . 
                    . . . 4 4 4 4 4 4 4 2 4 . . . . 
                    . . . . 4 . . . . . 4 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 4 4 4 . . . 4 . . . 
                    . . . . . 4 4 2 2 4 4 4 4 4 . . 
                    . . . . 4 4 2 5 5 2 2 2 2 4 . . 
                    . . . 4 4 2 5 5 5 5 5 5 2 4 4 . 
                    . . . 4 2 5 5 5 5 5 5 5 5 2 2 4 
                    . 4 4 4 2 5 5 5 5 5 5 5 5 5 2 4 
                    . 4 4 2 5 5 5 5 5 5 5 5 5 5 2 4 
                    . 4 4 2 5 5 5 5 5 5 5 5 5 5 2 4 
                    . 4 4 2 5 5 5 5 5 5 5 5 5 2 4 . 
                    . 4 2 2 5 5 5 5 5 5 5 5 2 4 . . 
                    . 4 4 2 2 2 2 5 5 5 2 2 2 4 . . 
                    . 4 4 4 4 4 4 2 5 2 4 4 4 4 . . 
                    . . . . . 4 4 2 2 4 . . 4 4 . . 
                    . . . . 4 4 4 4 4 . . . 4 . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . 4 4 . . 
                    . . . . . . . . . 4 4 4 4 4 4 . 
                    . . 4 4 4 4 4 4 4 2 2 2 2 2 4 . 
                    . 4 4 2 2 2 2 2 2 5 5 5 5 2 4 . 
                    4 2 2 5 5 5 5 5 5 5 5 5 5 2 4 . 
                    4 2 5 5 5 5 5 5 5 5 5 5 5 2 4 . 
                    4 4 2 5 5 5 5 5 5 5 5 5 5 2 4 4 
                    . 4 4 2 5 5 5 5 5 5 5 5 5 5 2 4 
                    4 2 2 5 5 5 5 5 5 5 5 5 5 5 2 4 
                    4 2 5 5 5 5 5 5 5 5 5 5 5 2 4 4 
                    4 2 5 5 5 5 5 5 5 5 5 5 5 2 4 . 
                    4 4 2 5 5 5 5 5 5 5 5 5 2 4 4 . 
                    . 4 4 2 2 5 2 2 2 5 2 5 2 4 4 . 
                    . . 4 4 4 2 4 4 4 2 4 2 4 . . . 
                    . . . . 4 4 4 . 4 4 4 4 . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                75,
                false
                )
                statusbar2.value += -10
            }
            if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingRight, Predicate.MovingRight))) {
                projectile2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . f . . . 
                    . . . . . . . . . . f f . f . . 
                    . . . . . . . . f f . . . . f . 
                    . . . . . . . f f f f . . . . f 
                    . . . . . . f c c b b f . . . f 
                    . . . . . f c c c b b b f . . f 
                    . . . . . f c c c c b b f . . 2 
                    . . . . . f c c c c c c f . . 4 
                    . . . . . f c c c c c c f . . 5 
                    . . . . . . f c c c c f . . . . 
                    . . . . . . . f f f f . . . . . 
                    `, mySprite, 150, 0)
                animation.runImageAnimation(
                projectile2,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . f . . . 
                    . . . . . . . . . . f f . f . . 
                    . . . . . . . . f f . . . . f . 
                    . . . . . . . f f f f . . . . f 
                    . . . . . . f c c b b f . . . f 
                    . . . . . f c c c b b b f . . f 
                    . . . . . f c c c c b b f . . 2 
                    . . . . . f c c c c c c f . . 4 
                    . . . . . f c c c c c c f . 2 5 
                    . . . . . . f c c c c f . 2 . . 
                    . . . . . . . f f f f . . . 2 . 
                    `,img`
                    . . . . . . . . f f 2 4 5 f . . 
                    . . . . . . . f . . . 2 . 2 . . 
                    . . . . . . f . . . . . 2 . . . 
                    . . . . . f . . . . f f f f . . 
                    . . . . . . f . . f b b c c f . 
                    . . . . . . f . f b b b c c c f 
                    . . . . . . . f f b b c c c c f 
                    . . . . . . . f f c c c c c c f 
                    . . . . . . . . f c c c c c c f 
                    . . . . . . . . . f c c c c f . 
                    . . . . . . . . . . f f f f . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . f f f f . . . . . . . 
                    . . . . f c c c c f . . . . . . 
                    f . . f c c c c c c f . . . . . 
                    f . . f c c c c c c f . . . . . 
                    5 . . f b b c c c c f . . . . . 
                    4 . . f b b b c c c f . . . . . 
                    4 2 2 . f b b c c f . . . . . . 
                    2 . . 2 . f f f f . . . . . . . 
                    . f . . . . f f . . . . . . . . 
                    . . f . f f . . . . . . . . . . 
                    . . . f . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . f f f f . . . . . . . . . . 
                    . f c c c c f . . . . . . . . . 
                    f c c c c c c f . . . . . . . . 
                    f c c c c c c f f . . . . . . . 
                    f c c c c b b f f . . . . . . . 
                    f c c c b b b f . f . . . . . . 
                    . f c c b b f . . f . . . . . . 
                    . . f f f f . . . . 2 . . . . . 
                    . . . . . . . . . 4 . 2 . . . . 
                    . . . . . . . . 5 . 2 2 . . . . 
                    . . f f f f f f . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . 2 . . . f . . . 
                    . . . . . . . . . 2 4 5 . f . . 
                    . . . . . . . . f 2 . . . . f . 
                    . . . . . . . f f f f . . . . f 
                    . . . . . . f c c b b f . . . f 
                    . . . . . f c c c b b b f . . f 
                    . . . . . f c c c c b b f . . f 
                    . . . . . f c c c c c c f . . f 
                    . . . . . f c c c c c c f . . f 
                    . . . . . . f c c c c f . . . . 
                    . . . . . . . f f f f . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . f . . . 
                    . . . . . . . . . . 5 f . f . . 
                    . . . . . . . . f 4 . . . . f . 
                    . . . . . . . f 2 2 2 . . . . f 
                    . . . . . . f c c 2 b f . . . f 
                    . . . . . f c c c b b b f . . f 
                    . . . . . f c c c c b b f . . f 
                    . . . . . f c c c c c c f . . f 
                    . . . . . f c c c c c c f . . f 
                    . . . . . . f c c c c f . . . . 
                    . . . . . . . f f f f . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . 4 4 4 . . 4 4 . 
                    . . . . . . . 4 4 2 2 4 4 2 4 . 
                    . . 4 4 4 4 4 2 2 5 5 2 2 2 4 . 
                    . . 4 2 2 2 4 2 5 5 5 5 5 2 4 . 
                    . . 4 2 5 5 2 5 5 5 5 5 5 2 4 . 
                    . . 4 4 2 5 5 5 5 5 5 5 5 2 4 . 
                    . . . 4 2 5 5 5 5 5 5 5 2 4 . . 
                    . . 4 2 5 5 5 5 5 5 5 5 2 4 . . 
                    . . 4 4 2 2 2 2 2 2 5 2 4 4 . . 
                    . . . 4 4 4 4 4 4 4 2 4 . . . . 
                    . . . . 4 . . . . . 4 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 4 4 4 . . . 4 . . . 
                    . . . . . 4 4 2 2 4 4 4 4 4 . . 
                    . . . . 4 4 2 5 5 2 2 2 2 4 . . 
                    . . . 4 4 2 5 5 5 5 5 5 2 4 4 . 
                    . . . 4 2 5 5 5 5 5 5 5 5 2 2 4 
                    . 4 4 4 2 5 5 5 5 5 5 5 5 5 2 4 
                    . 4 4 2 5 5 5 5 5 5 5 5 5 5 2 4 
                    . 4 4 2 5 5 5 5 5 5 5 5 5 5 2 4 
                    . 4 4 2 5 5 5 5 5 5 5 5 5 2 4 . 
                    . 4 2 2 5 5 5 5 5 5 5 5 2 4 . . 
                    . 4 4 2 2 2 2 5 5 5 2 2 2 4 . . 
                    . 4 4 4 4 4 4 2 5 2 4 4 4 4 . . 
                    . . . . . 4 4 2 2 4 . . 4 4 . . 
                    . . . . 4 4 4 4 4 . . . 4 . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . 4 4 . . 
                    . . . . . . . . . 4 4 4 4 4 4 . 
                    . . 4 4 4 4 4 4 4 2 2 2 2 2 4 . 
                    . 4 4 2 2 2 2 2 2 5 5 5 5 2 4 . 
                    4 2 2 5 5 5 5 5 5 5 5 5 5 2 4 . 
                    4 2 5 5 5 5 5 5 5 5 5 5 5 2 4 . 
                    4 4 2 5 5 5 5 5 5 5 5 5 5 2 4 4 
                    . 4 4 2 5 5 5 5 5 5 5 5 5 5 2 4 
                    4 2 2 5 5 5 5 5 5 5 5 5 5 5 2 4 
                    4 2 5 5 5 5 5 5 5 5 5 5 5 2 4 4 
                    4 2 5 5 5 5 5 5 5 5 5 5 5 2 4 . 
                    4 4 2 5 5 5 5 5 5 5 5 5 2 4 4 . 
                    . 4 4 2 2 5 2 2 2 5 2 5 2 4 4 . 
                    . . 4 4 4 2 4 4 4 2 4 2 4 . . . 
                    . . . . 4 4 4 . 4 4 4 4 . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                75,
                false
                )
                statusbar2.value += -10
            }
            if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingLeft))) {
                projectile2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . f . . . 
                    . . . . . . . . . . f f . f . . 
                    . . . . . . . . f f . . . . f . 
                    . . . . . . . f f f f . . . . f 
                    . . . . . . f c c b b f . . . f 
                    . . . . . f c c c b b b f . . f 
                    . . . . . f c c c c b b f . . 2 
                    . . . . . f c c c c c c f . . 4 
                    . . . . . f c c c c c c f . . 5 
                    . . . . . . f c c c c f . . . . 
                    . . . . . . . f f f f . . . . . 
                    `, mySprite, -150, 0)
                animation.runImageAnimation(
                projectile2,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . f . . . 
                    . . . . . . . . . . f f . f . . 
                    . . . . . . . . f f . . . . f . 
                    . . . . . . . f f f f . . . . f 
                    . . . . . . f c c b b f . . . f 
                    . . . . . f c c c b b b f . . f 
                    . . . . . f c c c c b b f . . 2 
                    . . . . . f c c c c c c f . . 4 
                    . . . . . f c c c c c c f . 2 5 
                    . . . . . . f c c c c f . 2 . . 
                    . . . . . . . f f f f . . . 2 . 
                    `,img`
                    . . . . . . . . f f 2 4 5 f . . 
                    . . . . . . . f . . . 2 . 2 . . 
                    . . . . . . f . . . . . 2 . . . 
                    . . . . . f . . . . f f f f . . 
                    . . . . . . f . . f b b c c f . 
                    . . . . . . f . f b b b c c c f 
                    . . . . . . . f f b b c c c c f 
                    . . . . . . . f f c c c c c c f 
                    . . . . . . . . f c c c c c c f 
                    . . . . . . . . . f c c c c f . 
                    . . . . . . . . . . f f f f . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . f f f f . . . . . . . 
                    . . . . f c c c c f . . . . . . 
                    f . . f c c c c c c f . . . . . 
                    f . . f c c c c c c f . . . . . 
                    5 . . f b b c c c c f . . . . . 
                    4 . . f b b b c c c f . . . . . 
                    4 2 2 . f b b c c f . . . . . . 
                    2 . . 2 . f f f f . . . . . . . 
                    . f . . . . f f . . . . . . . . 
                    . . f . f f . . . . . . . . . . 
                    . . . f . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . f f f f . . . . . . . . . . 
                    . f c c c c f . . . . . . . . . 
                    f c c c c c c f . . . . . . . . 
                    f c c c c c c f f . . . . . . . 
                    f c c c c b b f f . . . . . . . 
                    f c c c b b b f . f . . . . . . 
                    . f c c b b f . . f . . . . . . 
                    . . f f f f . . . . 2 . . . . . 
                    . . . . . . . . . 4 . 2 . . . . 
                    . . . . . . . . 5 . 2 2 . . . . 
                    . . f f f f f f . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . 2 . . . f . . . 
                    . . . . . . . . . 2 4 5 . f . . 
                    . . . . . . . . f 2 . . . . f . 
                    . . . . . . . f f f f . . . . f 
                    . . . . . . f c c b b f . . . f 
                    . . . . . f c c c b b b f . . f 
                    . . . . . f c c c c b b f . . f 
                    . . . . . f c c c c c c f . . f 
                    . . . . . f c c c c c c f . . f 
                    . . . . . . f c c c c f . . . . 
                    . . . . . . . f f f f . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . f . . . 
                    . . . . . . . . . . 5 f . f . . 
                    . . . . . . . . f 4 . . . . f . 
                    . . . . . . . f 2 2 2 . . . . f 
                    . . . . . . f c c 2 b f . . . f 
                    . . . . . f c c c b b b f . . f 
                    . . . . . f c c c c b b f . . f 
                    . . . . . f c c c c c c f . . f 
                    . . . . . f c c c c c c f . . f 
                    . . . . . . f c c c c f . . . . 
                    . . . . . . . f f f f . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . 4 4 4 . . 4 4 . 
                    . . . . . . . 4 4 2 2 4 4 2 4 . 
                    . . 4 4 4 4 4 2 2 5 5 2 2 2 4 . 
                    . . 4 2 2 2 4 2 5 5 5 5 5 2 4 . 
                    . . 4 2 5 5 2 5 5 5 5 5 5 2 4 . 
                    . . 4 4 2 5 5 5 5 5 5 5 5 2 4 . 
                    . . . 4 2 5 5 5 5 5 5 5 2 4 . . 
                    . . 4 2 5 5 5 5 5 5 5 5 2 4 . . 
                    . . 4 4 2 2 2 2 2 2 5 2 4 4 . . 
                    . . . 4 4 4 4 4 4 4 2 4 . . . . 
                    . . . . 4 . . . . . 4 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 4 4 4 . . . 4 . . . 
                    . . . . . 4 4 2 2 4 4 4 4 4 . . 
                    . . . . 4 4 2 5 5 2 2 2 2 4 . . 
                    . . . 4 4 2 5 5 5 5 5 5 2 4 4 . 
                    . . . 4 2 5 5 5 5 5 5 5 5 2 2 4 
                    . 4 4 4 2 5 5 5 5 5 5 5 5 5 2 4 
                    . 4 4 2 5 5 5 5 5 5 5 5 5 5 2 4 
                    . 4 4 2 5 5 5 5 5 5 5 5 5 5 2 4 
                    . 4 4 2 5 5 5 5 5 5 5 5 5 2 4 . 
                    . 4 2 2 5 5 5 5 5 5 5 5 2 4 . . 
                    . 4 4 2 2 2 2 5 5 5 2 2 2 4 . . 
                    . 4 4 4 4 4 4 2 5 2 4 4 4 4 . . 
                    . . . . . 4 4 2 2 4 . . 4 4 . . 
                    . . . . 4 4 4 4 4 . . . 4 . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . 4 4 . . 
                    . . . . . . . . . 4 4 4 4 4 4 . 
                    . . 4 4 4 4 4 4 4 2 2 2 2 2 4 . 
                    . 4 4 2 2 2 2 2 2 5 5 5 5 2 4 . 
                    4 2 2 5 5 5 5 5 5 5 5 5 5 2 4 . 
                    4 2 5 5 5 5 5 5 5 5 5 5 5 2 4 . 
                    4 4 2 5 5 5 5 5 5 5 5 5 5 2 4 4 
                    . 4 4 2 5 5 5 5 5 5 5 5 5 5 2 4 
                    4 2 2 5 5 5 5 5 5 5 5 5 5 5 2 4 
                    4 2 5 5 5 5 5 5 5 5 5 5 5 2 4 4 
                    4 2 5 5 5 5 5 5 5 5 5 5 5 2 4 . 
                    4 4 2 5 5 5 5 5 5 5 5 5 2 4 4 . 
                    . 4 4 2 2 5 2 2 2 5 2 5 2 4 4 . 
                    . . 4 4 4 2 4 4 4 2 4 2 4 . . . 
                    . . . . 4 4 4 . 4 4 4 4 . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                75,
                false
                )
                statusbar2.value += -10
            }
        }
    }
    if (item == 3) {
        if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingUp, Predicate.MovingUp))) {
            projectile3 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 9 9 . . . . . . . . . 
                . . . . 9 9 9 9 . . . . . . . . 
                . . . 9 9 9 9 9 9 . . . . . . . 
                . . . 9 9 9 9 9 9 . . . . . . . 
                . . . 9 9 9 9 9 9 . . . . . . . 
                . . . 9 9 9 9 9 9 . . . . . . . 
                . . . 9 9 9 9 9 9 . . . . . . . 
                . . . 9 9 9 9 9 9 . . . . . . . 
                . . . . 9 9 9 9 . . . . . . . . 
                . . . . . 9 9 . . . . . . . . . 
                . . . . . 9 9 . . . . . . . . . 
                `, mySprite, 0, -200)
            statusbar2.value += -50
        }
        if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingDown, Predicate.MovingDown))) {
            projectile3 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 9 9 . . . . . . . . . 
                . . . . . 9 9 . . . . . . . . . 
                . . . . 9 9 9 9 . . . . . . . . 
                . . . 9 9 9 9 9 9 . . . . . . . 
                . . . 9 9 9 9 9 9 . . . . . . . 
                . . . 9 9 9 9 9 9 . . . . . . . 
                . . . 9 9 9 9 9 9 . . . . . . . 
                . . . 9 9 9 9 9 9 . . . . . . . 
                . . . 9 9 9 9 9 9 . . . . . . . 
                . . . . 9 9 9 9 . . . . . . . . 
                . . . . . 9 9 . . . . . . . . . 
                `, mySprite, 0, 200)
            statusbar2.value += -50
        }
        if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingLeft))) {
            projectile3 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . 9 9 9 9 9 9 . . . . . . . . 
                . 9 9 9 9 9 9 9 9 . . . . . . . 
                9 9 9 9 9 9 9 9 9 9 9 . . . . . 
                9 9 9 9 9 9 9 9 9 9 9 . . . . . 
                . 9 9 9 9 9 9 9 9 . . . . . . . 
                . . 9 9 9 9 9 9 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, -200, 0)
            statusbar2.value += -50
        }
        if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingRight, Predicate.MovingRight))) {
            projectile3 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . 9 9 9 9 9 9 . . 
                . . . . . . . 9 9 9 9 9 9 9 9 . 
                . . . . . 9 9 9 9 9 9 9 9 9 9 9 
                . . . . . 9 9 9 9 9 9 9 9 9 9 9 
                . . . . . . . 9 9 9 9 9 9 9 9 . 
                . . . . . . . . 9 9 9 9 9 9 . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 200, 0)
            statusbar2.value += -50
        }
    }
    if (item == 4) {
    	
    }
    if (item == 5) {
    	
    }
    if (item == 6) {
    	
    }
    if (item == 7) {
    	
    }
    if (item == 8) {
    	
    }
    if (mySprite5 == 6) {
        tiles.setCurrentTilemap(tilemap`level3`)
        mySprite.setPosition(mySprite3, mySprite4)
        mySprite2.setFlag(SpriteFlag.Invisible, true)
        controller.moveSprite(mySprite, 100, 100)
        mySprite.setFlag(SpriteFlag.Invisible, false)
        statusbar.setFlag(SpriteFlag.Invisible, false)
    }
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    mySprite4 = mySprite.y
    mySprite3 = mySprite.x
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f a f b b b b f f . . . . 
        . . f a a a f b b b b f f . . . 
        . . f b b b b f f b b b f . . . 
        . f b a a a a b b f f f f . . . 
        . f a b f f f f a a a b f . . . 
        . f f f b b b f f f f f f f . . 
        . f b b c c f b b c c b f f . . 
        . . f b d d f 1 c d c b b f . . 
        . . . f d d d d c b b b f . . . 
        . . . f b c c c b b f f . . . . 
        . . . f a a a b d d c . . . . . 
        . . . f a a a b d d b . . . . . 
        . . . f 2 2 c f b b f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f c f b b b b f f . . . . 
        . . f c c c f b b b b f f . . . 
        . . f b b b b f f b b b f . . . 
        . f b c c c c b b f f f f . . . 
        . f c b f f f f c c c b f . . . 
        . f f f b b b f f f f f f f . . 
        . f b b a a f b b a a b f f . . 
        . . f b d d f 1 a d a b b f . . 
        . . . f d d d b b b b b f . . . 
        . . . f b a b d d a f . . . . . 
        . . . f c c b d d b f . . . . . 
        . . f f 2 2 f b b f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f c f b b b b f f . . . . 
        . . f c c c f b b b b f f . . . 
        . . f b b b b f f b b b f . . . 
        . f b c c c c b b f f f f . . . 
        . f c b f f f f c c c b f . . . 
        . f f f b b b f f f f f f f . . 
        . f b b a a f b b a a b f f . . 
        . . f b d d f 1 a d a b b f . . 
        . . . f d d d d a b b b f . . . 
        . . . f b a a a b b f f . . . . 
        . . . f a a a b d d a . . . . . 
        . . . f a a a b d d b . . . . . 
        . . . f 2 2 a f b b f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f c f b b b b f f . . . . 
        . . f c c c f b b b b f f . . . 
        . . f b b b b f f b b b f . . . 
        . f b c c c c b b f f f f . . . 
        . f c b f f f f c c c b f . . . 
        . f f f b b b f f f f f f f . . 
        . f b b a a f b b a a b f f . . 
        . . f b d d f 1 a d a b b f . . 
        . . . f d d d d a b b b f . . . 
        . . . f b a a a b d d a . . . . 
        . . . f c c c c b d d b . . . . 
        . . f f 2 2 a a f b b f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    true
    )
    characterAnimations.setCharacterState(mySprite, characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingLeft))
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    info.changeLifeBy(-1)
    statusbar.value = 100
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f b b b b f a f . . . 
        . . . f f b b b b f a a a f . . 
        . . . f b b b f f b b b b f . . 
        . . . f f f f b b a a a a b f . 
        . . . f b a a a f f f f b a f . 
        . . f f f f f f f b b b f f f . 
        . . f f b c c b b f c c b b f . 
        . . f b b c d c 1 f d d b f . . 
        . . . f b b b c d d d d f . . . 
        . . . . f f b b c c c b f . . . 
        . . . . . c d d b a a a f . . . 
        . . . . . b d d b a a a f . . . 
        . . . . . f b b f c 2 2 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f b b b b f c f . . . 
        . . . f f b b b b f c c c f . . 
        . . . f b b b f f b b b b f . . 
        . . . f f f f b b c c c c b f . 
        . . . f b c c c f f f f b c f . 
        . . f f f f f f f b b b f f f . 
        . . f f b a a b b f a a b b f . 
        . . f b b a d a 1 f d d b f . . 
        . . . f b b b b b d d d f . . . 
        . . . . . f a d d b a b f . . . 
        . . . . . f b d d b c c f . . . 
        . . . . f f f b b f 2 2 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f b b b b f c f . . . 
        . . . f f b b b b f c c c f . . 
        . . . f b b b f f b b b b f . . 
        . . . f f f f b b c c c c b f . 
        . . . f b c c c f f f f b c f . 
        . . f f f f f f f b b b f f f . 
        . . f f b a a b b f a a b b f . 
        . . f b b a d a 1 f d d b f . . 
        . . . f b b b a d d d d f . . . 
        . . . . f f b b a a a b f . . . 
        . . . . . a d d b a a a f . . . 
        . . . . . b d d b a a a f . . . 
        . . . . . f b b f a 2 2 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f b b b b f c f . . . 
        . . . f f b b b b f c c c f . . 
        . . . f b b b f f b b b b f . . 
        . . . f f f f b b c c c c b f . 
        . . . f b c c c f f f f b c f . 
        . . f f f f f f f b b b f f f . 
        . . f f b a a b b f a a b b f . 
        . . f b b a d a 1 f d d b f . . 
        . . . f b b b a d d d d f . . . 
        . . . . a d d b a a a b f . . . 
        . . . . b d d b c c c c f . . . 
        . . . . f b b f a a 2 2 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    true
    )
    characterAnimations.setCharacterState(mySprite, characterAnimations.rule(Predicate.FacingRight, Predicate.MovingRight))
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . f f f f f f . . . . . 
        . . . . f f f c c f f f . . . . 
        . . . f f f c c c c f f f . . . 
        . . f f f b b b b b b f f f . . 
        . . f f b c c c c c c b b f . . 
        . . f b c f f f f f f c b f . . 
        . . f f f f b b b b f f f f . . 
        . f f b f b f a a f b f b f f . 
        . f b b a 1 f d d f 1 a b b f . 
        . . f b b d d d d d d b b f . . 
        . . f f b b a a a a b b f f . . 
        . . b a f c c c c c c f a b . . 
        . . a d f c c c c c c f d a . . 
        . . a a f a a 2 2 a a f a a . . 
        . . . . f f f f f f f f . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f c c f f f . . . . 
        . . . f f f c c c c f f f . . . 
        . . f f f b b b b b b f f f . . 
        . . f f b c c c c c c b b f . . 
        . f f b c f f f f f f c b f f . 
        . f f f f f b b b b f f f f f . 
        . . f b f b f a a f b f b f . . 
        . . f b a 1 f d d f 1 a b f . . 
        . . . f b a d d d d a b f b . . 
        . . f b f c c c c b d d a b . . 
        . . b a f c c c c b d d b . . . 
        . . . . f a a 2 2 f b b . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f f f c c f f f . . . . 
        . . . f f f c c c c f f f . . . 
        . . f f f b b b b b b f f f . . 
        . . f f b c c c c c c b b f . . 
        . . f b c f f f f f f c b f . . 
        . . f f f f b b b b f f f f . . 
        . f f b f b f a a f b f b f f . 
        . f b b a 1 f d d f 1 a b b f . 
        . . f b b d d d d d d b b f . . 
        . . f f b b a a a a b b f f . . 
        . . b a f c c c c c c f a b . . 
        . . a d f c c c c c c f d a . . 
        . . a a f a a 2 2 a a f a a . . 
        . . . . f f f f f f f f . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f c c f f f . . . . 
        . . . f f f c c c c f f f . . . 
        . . f f f b b b b b b f f f . . 
        . . f b b c c c c c c b f f . . 
        . f f b c f f f f f f c b f f . 
        . f f f f f b b b b f f f f f . 
        . . f b f b f a a f b f b f . . 
        . . f b a 1 f d d f 1 a b f . . 
        . . b f b a d d d d a b f . . . 
        . . b a d d b c c c c f b f . . 
        . . . b d d b c c c c f a b . . 
        . . . . b b f 2 2 a a f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    true
    )
    characterAnimations.setCharacterState(mySprite, characterAnimations.rule(Predicate.FacingDown, Predicate.MovingDown))
})
let mySprite4 = 0
let mySprite3 = 0
let projectile3: Sprite = null
let projectile2: Sprite = null
let projectile: Sprite = null
let mySprite2: Sprite = null
let mySprite5 = 0
let item = 0
let statusbar2: StatusBarSprite = null
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
info.setLife(10)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f c c f f f . . . . 
    . . . f f f c c c c f f f . . . 
    . . f f f b b b b b b f f f . . 
    . . f f b c c c c c c b b f . . 
    . . f b c f f f f f f c b f . . 
    . . f f f f b b b b f f f f . . 
    . f f b f b f a a f b f b f f . 
    . f b b a 1 f d d f 1 a b b f . 
    . . f b b d d d d d d b b f . . 
    . . . f b b a a a a b b f . . . 
    . . b a f c c c c c c f a b . . 
    . . a d f c c c c c c f d a . . 
    . . a a f a a 2 2 a a f a a . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
let mySprite6 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 8 8 f f f . . . . 
    . . . f f f 8 8 8 8 f f f . . . 
    . . f f f 6 6 6 6 6 6 f f f . . 
    . . f f 6 8 8 8 8 8 8 6 6 f . . 
    . . f 6 8 f f f f f f 8 6 f . . 
    . . f f f f 6 6 6 6 f f f f . . 
    . f f 6 f b f 7 7 f b f 6 f f . 
    . f 6 6 7 1 f 9 9 f 1 7 6 6 f . 
    . . f 6 6 9 9 9 9 9 9 6 6 f . . 
    . . . f 6 6 7 7 7 7 6 6 f . . . 
    . . 6 7 f 8 8 8 8 8 8 f 7 6 . . 
    . . 7 9 f 8 8 8 8 8 8 f 9 7 . . 
    . . 7 7 f 7 7 6 6 7 7 f 7 7 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
mySprite6.setVelocity(50, 0)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar2 = statusbars.create(20, 4, StatusBarKind.Energy)
statusbar.attachToSprite(mySprite, 0, 0)
statusbar2.attachToSprite(mySprite, 4, 0)
statusbar.setColor(1, 2)
item = 1
info.setScore(1)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
