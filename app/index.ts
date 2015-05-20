class Person {

    fullname : string

    constructor( public firstname: string, public lastname: string, public age: number ) {

        this.fullname = `${firstname} ${lastname}`;

    }

    meet( stranger: Person ) {

      // Compare age
      if ( stranger.age === 666 ) {

        // Return with greeting
        return `Say Hello Who-Must-Not-Be-Named`

      } else if ( stranger.age > this.age ) {

        // Return with greeting
        return `Say Hello ${stranger.fullname}`

      }

      // WAT???
      return `*ehm*`

    }
}


const me = new Person( `Mario`, `Vejlupek`, 30 )


document.forms[ `meetStranger` ].onsubmit = function( event ){

  event.preventDefault()

  const strangerAge = ~~( document.getElementById( `strangerAge` ).value )
  const strangerFullNameArray = document.getElementById( `strangerFullName` ).value.split( ` ` )

  const strangerName = strangerFullNameArray[0]
  const strangerSurname = strangerFullNameArray[1] || ``

  const stranger = new Person( strangerName, strangerSurname, strangerAge )

  const response = me.meet( stranger )

  window.alert( response )

}
