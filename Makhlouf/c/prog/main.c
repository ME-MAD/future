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

    // printf("enter the number \n");

    // scanf("%d", &x);

    // for(int i = 1; i <= x ; i++)
    // {
    //     if(i % 2 == 0)
    //     {
    //         printf("%d \n", i);
    //     }
    // }

    // for(int i = 1; i <= x ; i++)
    // {
    //     if(i % 2 == 1)
    //     {
    //         printf("%d \n", i);
    //     }
    // }
}