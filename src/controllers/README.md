
# Controller Folder
## Naming Convention
### File Name
#### Snake Case + Dot Notation
Example : test.controller.ts

### Controller Name
#### Pascal Case
Example : TestController
``` Typescript
@Controller()
export class TestController{
    constructor(private readonly testService : TestService){}
}
```

### Function Name & Variable Name
#### Camel Case
Example : confirmPayment
``` Typescript
@Post()
function confirmPayment(paymentRequestDto:PaymentRequestDto){
    
}
```