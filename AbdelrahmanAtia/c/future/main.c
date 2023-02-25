
#include <stdio.h> // preprocessor

int main()
{
    int num;

    scanf("%d", &num);

    if(num <= 2)
    {
        printf("NO");
    }
    else if(num % 2 == 0)
    {
        printf("YES");
    }
    else
    {
        printf("NO");
    }
}
