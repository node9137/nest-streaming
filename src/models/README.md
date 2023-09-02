
# Model Folder
## Using ORM
### Typeorm
![Typeorm Image](https://github.com/typeorm/typeorm/raw/master/resources/logo_big.png)

## Naming Convention
### File Name
#### Snake Case + Dot Notation
Example : user.entity.ts

### Entity Name
#### Pascal Case
Example : User
### Variable Name
#### Camel Case
Example : postId
### Field Name in Column Decorator
#### Snake Case
Example : post_id

``` Typescript
@Entity({})
export class User{

    @Column({ name: "post_id", select: false })
    postId!: string;

}
```

