# Asset Management
Asset Management System

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
