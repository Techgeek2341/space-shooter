controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 3 3 3 3 . . . . . . . . . . 
        3 3 3 3 3 3 3 . . . . . . . . . 
        3 3 3 3 3 3 3 . . . . . . . . . 
        . . 3 3 3 3 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Spaceship, -100, 0)
})
info.onCountdownEnd(function () {
    game.over(true, effects.starField)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let Bogey: Sprite = null
let projectile: Sprite = null
let Spaceship: Sprite = null
info.setLife(3)
Spaceship = sprites.create(img`
    ....................................
    ....................................
    ....................................
    ...............ccffff...............
    ..............cddbbbf...............
    .......ffffffcddbbbf................
    .....ffbbbbbbbbbbbbbcfff.......ccccc
    ...ffbbbbbbbbcbcbbbbbcccff....cdbbbc
    ..fbbbbbbbbbbcbbcbbbbcccccfffcddbbc.
    .fbcbbbbbbbbbbcbcbbbbccccccccbdbbf..
    .fbbbbbbbfffbbcbbbbbccccccccccbbcf..
    .ffbb1111fffbbcbbbbcccccccbcffbccf..
    ..ff111111111bbbbccccccbbbcc..fbbcf.
    ....ccccccc111bdbbbfddbccc.....ffbbf
    ........ccccccfbdbbbfcc..........fff
    ...............ffffff...............
    `, SpriteKind.Player)
controller.moveSprite(Spaceship, 100, 100)
Spaceship.setStayInScreen(true)
info.startCountdown(15)
game.onUpdateInterval(500, function () {
    Bogey = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 3 3 . . . . . . . 
        . 3 3 . . . . . 3 3 3 3 . . . . 
        3 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
        3 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
        . 3 3 . . . . . 3 3 3 3 . . . . 
        . . . . . . . 3 3 . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Bogey.setVelocity(55, 0)
    Bogey.setPosition(0, randint(5, 115))
    Bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
