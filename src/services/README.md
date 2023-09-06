
# Service Folder
## Naming Convention
### File Name
#### Snake Case + Dot Notation
Example : test.service.ts

### Service Name
#### Pascal Case
Example : TestService
``` Typescript
@Injectable()
export class TestService{
    constructor(private readonly testRepository : TestRepository){}
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