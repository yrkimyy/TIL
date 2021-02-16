Asynchronous means that things can happen independently of the main program flow.
비동기적 이라는 것은 어떤 메인 플로우에서 독립적으로 발생하는 일들을 말한다. 

JavaScript is synchronous by default and is single threaded. This means that code cannot create new threads and run in parallel.

그러나 자바스크립트는 디폴트로 동기적이고, 싱글스레드다.(캔버스가 하나임) 그 말인즉 코드는 새로운 스레드를 만들 수 없고, 모든 것은 차례대로 진행된다는 것이다. 

But JavaScript was born inside the browser, its main job, in the beginning, was to respond to user actions, like onClick, onMouseOver, onChange, onSubmit and so on. How could it do this with a synchronous programming model?

그러나 자바스크립트는 브라우저 안에서 탄생했고, 애초에 메인 작업은 유저의 행동에 반응하는 것이었다. 
이러한 것들이 어떻게 동기적인 프로그램 모델로 작동할 수 있는가?

The answer was in its environment. The browser provides a way to do it by providing a set of APIs that can handle this kind of functionality.

답은 그 환경, 런타임에 있다. 브라우저는 api를 제공함으로써, 이러한 기능들을 작업 가능하게 만드는 방법을 제공했다. 

More recently, Node.js introduced a non-blocking I/O environment to extend this concept to file access, network calls and so on.
최근 들어서는 노드가 논블로킹 인풋, 아웃풋 환경을 소개 했다. 


