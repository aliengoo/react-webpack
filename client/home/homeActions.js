const ActionTypes = {
  SAY_HELLO: "SAY_HELLO"
};

export {
  ActionTypes
};

export function sayHello(username) {
  return {
    type: ActionTypes.SAY_HELLO,
    data: username
  };
}
