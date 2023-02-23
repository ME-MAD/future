
#include <iostream>
using namespace std;
int main()
{
    int x;
    cin >> x;
    bool y = true;

    for (int i = 2; i < x; i++)
    {
        if (x % i == 0)
        {
            y = false;
        }
    }

    if (y == true)
    {
        cout << " Yes ";
    }
    else
    {
        cout << " No ";
    }
}



