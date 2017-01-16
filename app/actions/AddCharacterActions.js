import alt from '../alt';

class AddCharacterActions {
  constructor() {
    this.generateActions(
      'addCharacterSuccess',
      'addCharacterFail',
      'updateName',
      'updateGender',
      'invalidName',
      'invalidGender'
    );
  }

  addCharacter(name, gender) {
    $.ajax({
      type: 'POST',
      url: '/api/characters',
      data: { name: name, gender: gender }
    })
      .done((data) => {
        console.log("done"+data.message);
        this.actions.addCharacterSuccess(data.message);
      })
      .fail((jqXhr) => {
        console.log("done"+jqXhr.responseJSON.message);
        this.actions.addCharacterFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(AddCharacterActions);
