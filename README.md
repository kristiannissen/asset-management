# Asset Management

Asset Management System

### Use Case

I regurlarly purchase various types of hardware for my coworkers and need a way to store the information about it that I may later need in case of a claim or need for support as well as renewing and keep updated.

## Define Asset/Structs

```
type (
  Support struct {
    Type string
  }
  Employee struct {
    Name string
  }
  Issue struct {
    Name, Description string
  }
  Tag struct {
    Name string
  }
  Asset struct {
    Name, Type, SN string
    Warranty date
    SupportType Support
    EOL bool
    Owners []Employee
    Issues []Issue
    Tags []Tag
  }
)
```
